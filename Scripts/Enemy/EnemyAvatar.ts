import {CharacterAvatar} from "../Avatar/CharacterAvatar.ts";
import {controls} from "../../main.js";
import {SetupBattle} from "../Battle/SetupBattle.js";
import { Interactable } from "../Interactable.ts";

export class EnemyAvatar extends CharacterAvatar implements Interactable{
    auto: boolean = true;

    interact() {
        controls.unlock();
        SetupBattle( [this.character]);
        this.obj.position.x += 3;    
    }
}