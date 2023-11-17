import {AvatarManager} from "./AvatarHandler";
import {Character} from "../Character/Character.js";
import {SetupBattle} from "../Battle/SetupBattle";
import {controls} from "../../main.js";
import * as THREE from "three";
import {AvatarMorphs, Morphs} from "./Morphs";

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
    }
    interact(){
        console.log("Interacting with character");
    }
    async LoadAndSetPos(position) {
        this.avatar = AvatarManager.getAvatar(this.character);
        let loaded = await this.avatar.load();
        loaded.position.set(position.x, position.y, position.z);
        this.obj = loaded;
        this.findMorphs();
        this.loaded = true;
        return loaded;
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

