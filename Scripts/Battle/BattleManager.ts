import { StartAfterBattle } from "../AfterBattle/SetupAfterBattle";
import { Character } from "../Character/Character";
import {Player} from "../Player";
import { BattleAvatar } from "./BattleAvatar";
import { refreshBtns } from "./BattleBtns";
import { OnLeaveCombat } from "./SetupBattle";
export let inBattle = false;

const battleLog = document.getElementById("battleLog")!;

let battleLogText: string = "";
let turn : number = 1;

let enemies: Character[] = [];
let pAvatar: BattleAvatar, eAvatar: BattleAvatar;
export function startBattle(combatEmemies: Character[], playerAvatar: BattleAvatar, enemyAvatar:BattleAvatar){
    console.log("Setup battle");
    enemies = combatEmemies;
    pAvatar = playerAvatar;
    eAvatar = enemyAvatar;
    inBattle = true;
    refreshBtns(Player);
    battleLog.innerHTML = "";
    battleLogText = "";
    turn = 1;
}

export function log(text: string){
    battleLogText = `Turn: ${turn}<br>${text}<br><br>${battleLogText}`;
    battleLog.innerHTML = battleLogText;
}

export function targetedEnemy(){
    if (enemies.length < 1){
        console.log("No enemies");
        leaveCombat();
        return;
    }
    return enemies[0];
}

export function nextTurn(){
    turn++;
    updateStats();
    enemyAttack();
    refreshBtns(Player);
}

const battleDoc = document.getElementById("Battle")!;
const freePlay = document.getElementById("FreePlay")!;

export function leaveCombat() {
    OnLeaveCombat();
    battleDoc.style.display = "none";
    freePlay.style.display = "block";
    inBattle = false;
}


function enemyAttack(){

}
function WinBattle() {
    OnLeaveCombat();
    battleDoc.style.display = "none";
    inBattle = false;
    StartAfterBattle(enemies);    
}

function updateStats() {
    if (Player.Health.current <= 0) {
        console.log("Player died");
        leaveCombat();
        return;
    }
    if (enemies.every(enemy => enemy.Health.current <= 0)) {
        console.log("Enemies died");
        WinBattle();
        return;
    }

    pAvatar.updateHp(Player.Health.current, Player.Health.max);
    enemies.forEach(enemy => {
        eAvatar.updateHp(enemy.Health.current, enemy.Health.max);
    });
}
