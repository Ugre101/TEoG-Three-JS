import { Character } from "../Character/Character";
import { AfterAction } from "./AfterBattleActions/AfterAction";
import { refreshAfterBattleBtns } from "./AfterBattleBtns";

class AfterBattleManager{
    public lastAction: AfterAction | null = null;
    private player : Character;
    private enemy : Character;
    constructor() {
        
    }

    public Setup(player: Character, enemy: Character){
        this.player = player;
        this.enemy = enemy;
        refreshAfterBattleBtns(this.player, this.enemy);
    }

    public UseAction(action: AfterAction){
        if (this.lastAction != null && this.lastAction === action) {
            this.lastAction.OnContinueUse(this.player, this.enemy);
        } else {
            action.OnUse(this.player, this.enemy);
        }
        this.lastAction = action;
        refreshAfterBattleBtns(this.player, this.enemy);
    }
}
export const afterBattleManager = new AfterBattleManager();