import { Character } from "../Character/Character";
import { Player } from "../Player";
import { CharacterPortraitRenderer } from "../Tools/SceneTools";
import { AfterBattleAvatar } from "./AfterBattleAvatar";
import { afterBattleManager } from "./AfterBattleManager";
import * as THREE from 'three';

const afterBattleDoc = document.getElementById("AfterBattle")!;

const playerCanvas = document.getElementById("playerAfterCanvas")!;
const playerPortrait = new CharacterPortraitRenderer(playerCanvas, new THREE.Color(0x88ccee));

const enemyCanvas = document.getElementById("enemyAfterCanvas")!;
const enemyPortrait = new CharacterPortraitRenderer(enemyCanvas, new THREE.Color(0x88ccee));

export function StartAfterBattle(enemies: Character[]){
    afterBattleDoc.style.display = "block";

    playerPortrait.ReSize();
    enemyPortrait.ReSize();

    playerPortrait.SubscribeToResize();
    enemyPortrait.SubscribeToResize();

    let playerAvatar = new AfterBattleAvatar(true,playerPortrait.scene, Player);
    let enemyAvatar = new AfterBattleAvatar(false,enemyPortrait.scene, enemies[0]);

    afterBattleManager.Setup(Player,playerAvatar,enemies[0],enemyAvatar);
}

export function OnLeaveAfterBattle(){
    playerPortrait.UnsubscribeToResize();
    enemyPortrait.UnsubscribeToResize();
}

export function AnimateAfterBattle(){
    playerPortrait.Render();
    enemyPortrait.Render();
}