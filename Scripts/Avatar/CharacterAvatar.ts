import {Avatar, AvatarManager} from "./AvatarHandler";
import * as THREE from "three";
import {AvatarMorphs, Morphs} from "./Morphs";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";

import animationUrl from '/Resources/Animations/VoreAnimations2.glb?url';
import { Character } from "../Character/Character";

export class CharacterAvatar {
    public character: Character;
    public obj: any;
    public loaded: boolean = false;
    public avatar: Avatar;
    public morphs: AvatarMorphs = new AvatarMorphs();
    public mixer: THREE.AnimationMixer;
    public animationsClips: THREE.AnimationClip[] = [];
    constructor(character: Character) {
        this.character = character;
        this.morphs = new AvatarMorphs();

    }
   
    async LoadAndSetPos(position: { x: number; y: number; z: number}) {
        this.avatar = AvatarManager.getAvatar(this.character);
        let loadedAvatar = await this.avatar.load();
        loadedAvatar.scene.position.set(position.x, position.y, position.z);
        this.obj = loadedAvatar.scene;
        this.mixer = new THREE.AnimationMixer(loadedAvatar.scene);
        console.log(this.mixer);
        this.findMorphs();
        this.sortAnimations(loadedAvatar);
        this.loaded = true;
        return loadedAvatar;
    }
    
    sortAnimations(gltf){
        gltf.animations.forEach((clip:THREE.AnimationClip) => {
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

