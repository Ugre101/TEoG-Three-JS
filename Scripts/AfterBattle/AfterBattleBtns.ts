import { Character } from "../Character/Character";
import { voreSettings } from "../Vore/VoreSystem";
import { AfterAction } from "./AfterBattleActions/AfterAction";
import { EssenceActions } from "./AfterBattleActions/EssenceActions";
import { MiscActions } from "./AfterBattleActions/MiscActions";
import { SexActions } from "./AfterBattleActions/SexAction";
import { VoreActions } from "./AfterBattleActions/VoreActions";
import { afterBattleManager } from "./AfterBattleManager";

const afterBattleBtns = document.getElementById("afterBattleBtns")!;
const voreBtns = document.getElementById("voreBtns")!;
const sexBtns = document.getElementById("sexBtns")!;
const essenceBtns = document.getElementById("essenceBtns")!;
const miscBtns = document.getElementById("miscBtns")!;

export function refreshAfterBattleBtns(caster: Character, target: Character){
    console.log("Refreshing after battle buttons");
    MiscActions.forEach(action => {
        if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action.name === action.name)){
            let btn = new AfterBattleBtn(action);
            addedBtns.push(btn);
            miscBtns.appendChild(btn.btn);
        }else if (!action.canUse(caster, target) && addedBtns.some(btn => btn.action.name === action.name)){
            let btn = addedBtns.find(btn => btn.action.name === action.name)!;
            miscBtns.removeChild(btn.btn);
            addedBtns = addedBtns.filter(btn => btn.action.name !== action.name);
        }
    });
    addedBtns.forEach(btn => console.log(btn));
    SexActions.forEach(action => {
        if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action.name === action.name)){
            let btn = new AfterBattleBtn(action);
            addedBtns.push(btn);
            sexBtns.appendChild(btn.btn);
        }else if (!action.canUse(caster, target) && addedBtns.some(btn => btn.action.name === action.name)){
            let btn = addedBtns.find(btn => btn.action.name === action.name)!;
            sexBtns.removeChild(btn.btn);
            addedBtns = addedBtns.filter(btn => btn.action.name !== action.name);
        }
    });
    EssenceActions.forEach(action => {
        if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action.name === action.name)){
            let btn = new AfterBattleBtn(action);
            addedBtns.push(btn);
            essenceBtns.appendChild(btn.btn);
        }else if (!action.canUse(caster, target) && addedBtns.some(btn => btn.action.name === action.name)){
            let btn = addedBtns.find(btn => btn.action.name === action.name)!;
            essenceBtns.removeChild(btn.btn);
            addedBtns = addedBtns.filter(btn => btn.action.name !== action.name);
        }
    });
    afterBattleBtns.style.gridTemplateColumns = `repeat(${voreSettings.enabled ? 4 : 3}, 1fr)`;
    if (voreSettings.enabled){
        VoreActions.forEach(action => { 
            if (action.canUse(caster, target) && !addedBtns.some(btn => btn.action.name === action.name)){
                let btn = new AfterBattleBtn(action);
                addedBtns.push(btn);
                voreBtns.appendChild(btn.btn);
            }else if (!action.canUse(caster, target) && addedBtns.some(btn => btn.action.name === action.name)){
                let btn = addedBtns.find(btn => btn.action.name === action.name)!;
                voreBtns.removeChild(btn.btn);
                addedBtns = addedBtns.filter(btn => btn.action.name !== action.name);
            }
        });
    }
}

let addedBtns: AfterBattleBtn[] = [];

class AfterBattleBtn {
    public btn : HTMLButtonElement;
    public action : AfterAction;
    constructor(action: AfterAction){
        this.action = action;
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