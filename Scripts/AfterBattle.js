import * as THREE from "three";

const afterBattle = document.getElementById("AfterBattle");
const freePlay = document.getElementById("FreePlay");

export let inAfterBattle = false;
export function StartAfterBattle() {
    afterBattle.style.display = "block";
    inAfterBattle = true;
}

export function AnimateAfterBattle() {}

function EndAfterBattle() {
    afterBattle.style.display = "none";
    freePlay.style.display = "block";
    inAfterBattle = false;
}
