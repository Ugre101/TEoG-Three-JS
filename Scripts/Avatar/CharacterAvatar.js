import {AvatarManager} from "./AvatarHandler";
import {Character} from "../Character/Character.js";
import {SetupBattle} from "../Battle/SetupBattle";
import {controls} from "../../main.js";
import * as THREE from "three";
import {AvatarMorphs, Morphs} from "./Morphs";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";


export class CharacterAvatar {
    /**
     *
     * @param {Character} character
     */
    constructor(character) {
        this.character = character;
        this.obj = null;
        this.loaded = false;
        this.avatar = null;
        this.morphs = new AvatarMorphs();
        this.mixer = null;
        this.animationsClips = [];

    }
    interact(){
        console.log("Interacting with character");
    }
    async LoadAndSetPos(position) {
        this.avatar = AvatarManager.getAvatar(this.character);
        let loaded = await this.avatar.load();
        loaded.position.set(position.x, position.y, position.z);
        this.obj = loaded;
        this.mixer = new THREE.AnimationMixer(loaded);
        console.log(this.mixer);
        this.findMorphs();
        let res = await this.findAnimations();
        this.sortAnimations(res);
        this.loaded = true;
        return loaded;
    }
    async findAnimations() {
        const loader = new GLTFLoader();
        let res = await loader.loadAsync("/Resources/Animations/VoreAnimations2.glb");    
        return res;
    }

    sortAnimations(gltf){
        gltf.animations.forEach((clip) => {
            const animationsClip = this.mixer.clipAction(clip);
            this.animationsClips[clip.name] = animationsClip;
        });
    }

    findMorphs(){
        function findKeyWord(key, id, mesh) {
            if (key.includes("CTRLBodybuilder")) {
                this.morphs.foundMorph(Morphs.Muscle, id, mesh);
            } else if (key.includes("BreastsHeavy")) {
                this.morphs.foundMorph(Morphs.HeavyBreasts, id, mesh);
            } else if (key.includes("Heavy")) {
                this.morphs.foundMorph(Morphs.Fat, id, mesh);
            } else if (key.includes("Thin")) {
                this.morphs.foundMorph(Morphs.Thin, id, mesh);
            }
        }

        this.obj.traverse(n => {
            if (!n.isMesh) {
                return;
            }
            for (const [key, value] of Object.entries(n.morphTargetDictionary)) {
                findKeyWord.call(this, key, value, n);
            }
        });
    }
}

