import { Character } from "../Character/Character";
import { Player } from "../Player";
import { ActionDictionary, BattleAction } from "./BattleActions/BattleAction";
import { targetedEnemy } from "./BattleManager";

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
        });
    }

    public OnClick(caster: Character, target: Character){
            this.action.OnUse(caster, target);
    }
}

const btns = document.getElementById("BattleBtns")!;

export function refreshBtns(caster: Character){
    let knownActions = caster.KnownBattleActions;
    btns.innerHTML = "";
    knownActions.forEach(id => {
        let btn = new BattleBtn(id);
        btns.appendChild(btn.btn);
    });
}