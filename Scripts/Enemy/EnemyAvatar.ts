import {CharacterAvatar} from "../Avatar/CharacterAvatar.ts";
import {controls} from "../../main.js";
import {SetupBattle} from "../Battle/SetupBattle.js";

export class EnemyAvatar extends CharacterAvatar{
    interact() {
        controls.unlock();
        SetupBattle( [this.character]);
        this.obj.position.x += 3;    
    }
}