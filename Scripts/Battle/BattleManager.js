import { Player } from "../Player";


export function setupBattle(ememies){
}
function nextTurn(){
    enemyAttack();
}

const attack = document.getElementById("attack");
attack.addEventListener("click", function () {
    console.log("Attack");
    let dmg = basicAttack(Player);
    nextTurn();
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
    let dmgRoll = Math.random() * (1.5 - 0.5) + 0.5;
    let dmg = str * dmgRoll;
    if (didCrit) 
        dmg *= 2;
    console.log("Dmg: " + dmg);
    return dmg;
}

function enemyAttack(){

}
