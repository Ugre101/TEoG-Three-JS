import { Character } from "../Character/Character";
import { AfterAction } from "./AfterBattleActions/AfterAction";
import { AfterBattleAvatar } from "./AfterBattleAvatar";
import { refreshAfterBattleBtns } from "./AfterBattleBtns";

const afterBattleDoc = document.getElementById("AfterBattle")!;
const freePlay = document.getElementById("FreePlay")!;

class AfterBattleManager{
    public lastAction: AfterAction | null = null;
    private player : Character;
    private enemy : Character;
    public inAfterBattle: boolean = false;
    constructor() {
        
    }

    public Setup(player: Character,playerAvatar: AfterBattleAvatar, enemy: Character, enemyAvatar: AfterBattleAvatar){
        this.player = player;
        this.enemy = enemy;
        this.inAfterBattle = true;
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

    public LeaveAfterBattle(){
        this.inAfterBattle = false;
        afterBattleDoc.style.display = "none";
        freePlay.style.display = "block";

    }
}
export const afterBattleManager = new AfterBattleManager();