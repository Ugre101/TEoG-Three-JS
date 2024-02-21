import { Character } from "../Character/Character";
import { Player } from "../Player";
import { ActionDictionary, BattleAction } from "./BattleActions/BattleAction";
import { nextTurn, targetedEnemy } from "./BattleManager";

class BattleBtn {
    public action : BattleAction;
    public btn : HTMLButtonElement;
    constructor(id:number){
        this.action = ActionDictionary[id];
        this.btn = document.createElement("button");
        this.btn.innerHTML = this.action.name;
        this.btn.addEventListener("click", () => {
            let enemy = targetedEnemy();
            if (enemy)
                this.OnClick(Player, enemy);
            nextTurn();
        });
    }

    public OnClick(caster: Character, target: Character){
            this.action.OnUse(caster, target);
    }
}

const btns = document.getElementById("BattleBtns")!;
const addedBtns: BattleBtn[] = [];

export function refreshBtns(caster: Character){
    let knownActions = caster.KnownBattleActions;
    let newActions = knownActions.filter(id => !addedBtns.some(btn => btn.action.id == id));
    let removedActions = addedBtns.filter(btn => !knownActions.some(id => btn.action.id == id));
    if (newActions.length <= 0 && removedActions.length <= 0)
        return;

    removedActions.forEach(btn => {
        btns.removeChild(btn.btn);
        addedBtns.splice(addedBtns.indexOf(btn), 1);
    });
    newActions.forEach(id => {
        let btn = new BattleBtn(id);
        console.log(btns);
        
        btns.appendChild(btn.btn);
        addedBtns.push(btn);
    });
}


