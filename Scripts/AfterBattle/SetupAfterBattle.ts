import { Character } from "../Character/Character";
import { Player } from "../Player";
import { afterBattleManager } from "./AfterBattleManager";

const afterBattleDoc = document.getElementById("AfterBattle")!;

export function StartAfterBattle(enemies: Character[]){
    afterBattleDoc.style.display = "block";
    afterBattleManager.Setup(Player,enemies[0]);
}