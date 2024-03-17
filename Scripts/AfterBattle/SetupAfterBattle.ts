import { Character } from "../Character/Character";
import { Player } from "../Player";
import { CharacterPortraitRenderer } from "../Tools/SceneTools";
import { afterBattleManager } from "./AfterBattleManager";
import * as THREE from 'three';

const afterBattleDoc = document.getElementById("AfterBattle")!;

const playerCanvas = document.getElementById("playerAfterCanvas")!;
//const playerPortrait = new CharacterPortraitRenderer(playerCanvas, new THREE.Color(0x88ccee));

const enemyCanvas = document.getElementById("enemyAfterCanvas")!;
//const enemyPortrait = new CharacterPortraitRenderer(enemyCanvas, new THREE.Color(0x88ccee));

export function StartAfterBattle(enemies: Character[]){
    afterBattleDoc.style.display = "block";
    afterBattleManager.Setup(Player,enemies[0]);
}