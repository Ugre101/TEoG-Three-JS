import { Character } from "../Character/Character";
import { AfterAction } from "./AfterBattleActions/AfterAction";
import { SexActions } from "./AfterBattleActions/SexAction";
import { afterBattleManager } from "./AfterBattleManager";

export function refreshAfterBattleBtns(caster: Character, target: Character){
    console.log("Refreshing after battle buttons");
    addedBtns.forEach(btn => {
        if (!btn.canStillUse(caster, target))
            afterBattleBtns.removeChild(btn.btn);
    });
    SexActions.forEach(action => {
        if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action === action)){
            let btn = new AfterBattleBtn(action);
            addedBtns.push(btn);
            afterBattleBtns.appendChild(btn.btn);
        }
    });

}

const afterBattleBtns = document.getElementById("AfterBattleBtns")!;
const addedBtns: AfterBattleBtn[] = [];

class AfterBattleBtn {
    public btn : HTMLButtonElement;
    public action : AfterAction;
    constructor(action: AfterAction){
        this.btn = document.createElement("button");
        this.btn.innerHTML = action.name;
        this.btn.addEventListener("click", () => {
            afterBattleManager.UseAction(action);
        });
    } 

    canStillUse(caster: Character, target: Character) : boolean{
        if (this.action == null)
            return false;
        return this.action.canUse(caster, target);
    }
}