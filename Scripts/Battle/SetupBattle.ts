import * as THREE from "three";
import { startBattle as startBattle } from "./BattleManager";
import { BattleAvatar } from "./BattleAvatar";
import { Character } from "../Character/Character";
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
const playerRenderer:THREE.WebGLRenderer = new THREE.WebGLRenderer({ playerCanvas });

const enemyCanvas = document.getElementById("enemyCanvas")!;
const enemyRenderer:THREE.WebGLRenderer = new THREE.WebGLRenderer({ enemyCanvas });

const ambientLight:THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 1.0);

const playerScene:THREE.Scene = new THREE.Scene();
const playerCam:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    75,
    playerCanvas.offsetWidth / playerCanvas.offsetHeight,
    0.1,
    1000
);
playerScene.add(playerCam);
playerScene.add(ambientLight);
playerScene.background = new THREE.Color(0x88ccee);
playerScene.fog = new THREE.Fog(0x88ccee, 0, 75);
playerRenderer.setSize(playerCanvas.offsetWidth, playerCanvas.offsetHeight);
playerCanvas.appendChild(playerRenderer.domElement);

const enemyScene: THREE.Scene = new THREE.Scene();
const enemyCam: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    75,
    enemyCanvas.offsetWidth / enemyCanvas.offsetHeight,
    0.1,
    1000
);
enemyScene.add(enemyCam);
enemyScene.add(ambientLight);
enemyScene.background = new THREE.Color(0x88ccee);
enemyScene.fog = new THREE.Fog(0x88ccee, 0, 75);
enemyRenderer.setSize(enemyCanvas.offsetWidth, enemyCanvas.offsetHeight);
enemyCanvas.appendChild(enemyRenderer.domElement);


export function SetupBattle(enemies: Character[]) {
    battleDoc.style.display = "block";
    freePlay.style.display = "none";

    playerRenderer.setSize(playerCanvas.offsetWidth, playerCanvas.offsetHeight);
    enemyRenderer.setSize(enemyCanvas.offsetWidth, enemyCanvas.offsetHeight);
    
    let playerAvatar = new BattleAvatar(true,playerScene);
    let enemyAvatar = new BattleAvatar(false,enemyScene);

    startBattle(enemies, playerAvatar, enemyAvatar);
}

export function AnimateBattle() {
    playerRenderer.render(playerScene, playerCam);
    enemyRenderer.render(enemyScene, enemyCam);
}




