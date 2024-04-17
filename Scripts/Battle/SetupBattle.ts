import * as THREE from "three";
import { startBattle as startBattle } from "./BattleManager";
import { BattleAvatar } from "./BattleAvatar";
import { Character } from "../Character/Character";
import { CharacterPortraitRenderer } from "../Tools/SceneTools";
/*
loader.load('/Resources/Characters/Bovine.glb', function (gltf)
{
    gltf.scene.position.y = -1;
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.x += 5;
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});
*/
const battleDoc = document.getElementById("Battle")!;
const freePlay = document.getElementById("FreePlay")!;

const playerCanvas = document.getElementById("playerCanvas")!;
const playerPortrait = new CharacterPortraitRenderer(playerCanvas, new THREE.Color(0x88ccee));

const enemyCanvas = document.getElementById("enemyCanvas")!;
const enemyPortrait = new CharacterPortraitRenderer(enemyCanvas, new THREE.Color(0x88ccee));

export function SetupBattle(enemies: Character[]) {
    battleDoc.style.display = "block";
    freePlay.style.display = "none";

    playerPortrait.ReSize();
    enemyPortrait.ReSize();

    playerPortrait.SubscribeToResize();
    enemyPortrait.SubscribeToResize();

    
    let playerAvatar = new BattleAvatar(true,playerPortrait.scene);
    let enemyAvatar = new BattleAvatar(false,enemyPortrait.scene);

    startBattle(enemies, playerAvatar, enemyAvatar);
}

export function OnLeaveCombat() {
    playerPortrait.UnsubscribeToResize();
    enemyPortrait.UnsubscribeToResize();
}

export function AnimateBattle() {
    playerPortrait.Render();
    enemyPortrait.Render();
}