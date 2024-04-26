import { Character } from "../Character/Character";
import { voreSettings } from "../Vore/VoreSystem";
import { AfterAction } from "./AfterBattleActions/AfterAction";
import { EssenceActions } from "./AfterBattleActions/EssenceActions";
import { SexActions } from "./AfterBattleActions/SexAction";
import { VoreActions } from "./AfterBattleActions/VoreActions";
import { afterBattleManager } from "./AfterBattleManager";

const afterBattleBtns = document.getElementById("afterBattleBtns")!;


export function refreshAfterBattleBtns(caster: Character, target: Character){
    console.log("Refreshing after battle buttons");
    addedBtns.forEach(btn => {
        if (!btn.canStillUse(caster, target))
            afterBattleBtns.removeChild(btn.btn);
    });
    SexActions.forEach(action => {
        console.log(action.name);
        if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action === action)){
            let btn = new AfterBattleBtn(action);
            addedBtns.push(btn);
            afterBattleBtns.appendChild(btn.btn);
        }
    });
    EssenceActions.forEach(action => {
        console.log(action.name);
        if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action === action)){
            let btn = new AfterBattleBtn(action);
            addedBtns.push(btn);
            afterBattleBtns.appendChild(btn.btn);
        }
    });
    if (voreSettings.enabled){
        VoreActions.forEach(action => { 
            console.log(action.name);
            if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action === action)){
                let btn = new AfterBattleBtn(action);
                addedBtns.push(btn);
                afterBattleBtns.appendChild(btn.btn);
            }
        });
    }
}

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