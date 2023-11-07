import {AvatarManager} from "./AvatarHandler";
import {Character} from "../Player";
import {SetupBattle} from "../Battle/SetupBattle";
import {controls, interactables} from "../../main";

export class EnemyAvatar{
    /**
     *
     * @param {Character} character
     */
    constructor(character) {
        this.character = character;
        this.obj = null;
        this.loaded = false;
    }
    interact(){
        controls.unlock();
        SetupBattle( [this.character]);
        this.obj.position.x += 3;
    }
    async LoadAndSetPos(position) {
        let avatar = AvatarManager.getAvatar(this.character);
        let loaded = await avatar.load();
        loaded.position.set(position.x, position.y, position.z);
        this.obj = loaded;
        this.loaded = true;

        loaded.traverse(n => {
            if (n.isMesh) {
                let i = n.morphTargetDictionary["Unbirth"];
                n.morphTargetInfluences[i] = 0.1;
            }
        });

        return loaded;
    }
}