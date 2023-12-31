import { Character } from "../Character/Character.js";
import {Player} from "../Player.js";
export let inBattle = false;


let enemies = [];
let pAvatar, eAvatar;
export function startBattle(combatEmemies, playerAvatar, enemyAvatar){
    console.log("Setup battle");
    enemies = combatEmemies;
    pAvatar = playerAvatar;
    eAvatar = enemyAvatar;
    inBattle = true;
}

function targetedEnemy(){
    if (enemies.length < 1){
        console.log("No enemies");
        leaveCombat();
        return;
    }
    return enemies[0];
}

function nextTurn(){
    enemyAttack();
}

const attack = document.getElementById("attack");
attack.addEventListener("click", function () {
    console.log("Attack");
    let dmg = basicAttack(Player);
    let enemy = targetedEnemy();
    enemy.Health.damage(dmg);
    eAvatar.updateHp(enemy.Health.current, enemy.Health.max);
    nextTurn();
});

const battleDoc = document.getElementById("Battle");
const freePlay = document.getElementById("FreePlay");
const runFromBattle = document.getElementById("run");

function leaveCombat() {
    battleDoc.style.display = "none";
    freePlay.style.display = "block";
    inBattle = false;
}

runFromBattle.addEventListener("click", function () {
    leaveCombat();
});

function basicAttack(Character){
    let str = Character.Stats.str.Value();
    let dex = Character.Stats.dex.Value();
    let didCrit = false;
    // Roll for crit
    let critRoll = Math.random() * 100;
    if (critRoll <= dex) {
        didCrit = true;
    }
    console.log("Crit: " + didCrit);
    // Roll for dmg
    let dmgRoll = Math.random() * (2.5 - 1) + 1;
    let dmg = str * dmgRoll;
    if (didCrit) 
        dmg *= 2;
    dmg = Math.round(dmg);
    console.log("Dmg: " + dmg);
    return dmg;
}

function enemyAttack(){

}
function WinBattle() {
    battleDoc.style.display = "none";
   // inBattle = false;
    StartAfterBattle();
}