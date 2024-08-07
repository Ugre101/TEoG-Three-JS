import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls";
import { Move, playerCollisions } from "./Scripts/Move";
import { Character } from "./Scripts/Character/Character";
import { Mod } from "./Scripts/Character/Stats";
import { Race } from "./Scripts/Character/RaceSystem";
import * as MiniMap from "./Scripts/MiniMap";


import { Interactable } from "./Scripts/Interactable";

export const autoIntractable: Interactable[] = [];
export const interactable:Interactable[] = [];
export const container = document.getElementById("container")!;
import { AnimateBattle } from "./Scripts/Battle/SetupBattle";
import { inBattle } from "./Scripts/Battle/BattleManager";
import {AvatarManager} from "./Scripts/Avatar/AvatarHandler";
import {CharacterAvatar} from "./Scripts/Avatar/CharacterAvatar";
import {MenuManagerInstance} from "./Scripts/Menu";
import {Morphs} from "./Scripts/Avatar/Morphs";
import {MapManagerInstance} from "./Scripts/Maps/MapManager";
import {EnemyAvatar} from "./Scripts/Enemy/EnemyAvatar";
import {TestStuff} from "./Scripts/TestingGround";
import { InDialogue } from "./Scripts/Dialogue/DialogueMenu";

export function containerSize() {
    return {
        width: container.offsetWidth,
        height: container.offsetHeight,
        aspect: container.offsetWidth / container.offsetHeight,
    };
}

let frame = 0;

const clock = new THREE.Clock();
export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    containerSize().aspect,
    0.1,
    1000
);

export const controls = new PointerLockControls(camera, document.body);

scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(containerSize().width, containerSize().height);
container.appendChild(renderer.domElement);

camera.position.set(0, 1.5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

import px from '/Resources/ForestBackground/px.jpg';
import nx from '/Resources/ForestBackground/nx.jpg';
import py from '/Resources/ForestBackground/py.jpg';
import ny from '/Resources/ForestBackground/ny.jpg';
import pz from '/Resources/ForestBackground/pz.jpg';
import nz from '/Resources/ForestBackground/nz.jpg';
import { HotKeyMenuBtns } from "./Scripts/Menus/SetupMenuBtns";
import { CheckGender } from "./Scripts/Character/Genders";
import { afterBattleManager } from "./Scripts/AfterBattle/AfterBattleManager";
import { AnimateAfterBattle } from "./Scripts/AfterBattle/SetupAfterBattle";

const testUrls = [px, nx, py, ny, pz, nz];
const backTextureCube = new THREE.CubeTextureLoader().load(testUrls, (onLoad) => {
    onLoad.images.forEach((image) => {
        image.crossOrigin = "anonymous";
    });    
});
scene.background = backTextureCube;

scene.fog = new THREE.Fog(0x686868, 0, 75);



window.addEventListener("resize", () => {
    renderer.setSize(containerSize().width, containerSize().height);
    camera.aspect = containerSize().aspect;
    camera.updateProjectionMatrix();
});

scene.add(controls.getObject());

container.addEventListener("click", function () {
    controls.lock();
    clock.getDelta();
});

controls.addEventListener("lock", function () {
    //  instructions.style.display = 'none';
    //  blocker.style.display = 'none';
});
controls.addEventListener("unlock", function () {
    //    blocker.style.display = 'block';
    //    instructions.style.display = '';
});

console.log(MapManagerInstance.firstMap);

MapManagerInstance.firstMap.loadTexture();


await TestStuff();

const testEnemy = new Character(Race.Human);
testEnemy.gainFemi(100);
const testAvatar = new EnemyAvatar(testEnemy);
const newLocal = new Character(Race.Human);
const testAvatar2 = new CharacterAvatar(newLocal);
async function loadTestAvatar(){
    await testAvatar.LoadAndSetPos({x:2,y:-1,z:-4});
    await testAvatar2.LoadAndSetPos({x:4,y:-1,z:-4});
    testAvatar.obj.scale.set(1.5,1.5,1.5);
    testAvatar2.obj.scale.set(1.5,1.5,1.5);
    autoIntractable.push(testAvatar);
    scene.add(testAvatar.obj);
    scene.add(testAvatar2.obj);

    let clip = testAvatar2.animationsClips["Idle"];
    if (clip)
        clip.play();
}

animate();

await loadTestAvatar();

HotKeyMenuBtns.forEach(btn =>{
    document.addEventListener("keydown", (e) => {
        if (e.key === btn.hotKey){
            btn.press();
        }
    });
});


function animate() {
    requestAnimationFrame(animate);
    if (inBattle) {
        AnimateBattle();
        return;
    }
    if (afterBattleManager.inAfterBattle){
        AnimateAfterBattle();
        return;
    }
    // If a menu is open, pause everything below this point
    if (MenuManagerInstance.isOpen){
        return;
    }

    if (InDialogue()){
        return;
    }

    if (testAvatar.loaded) {
        testAvatar.obj.rotation.y += 0.01;
        testAvatar.obj.position.x += 0.005;
    }

    if (controls.isLocked === true) {
        Move(clock.getDelta());
        playerCollisions(autoIntractable ,true);
        playerCollisions(interactable, false);
    }
    renderer.render(scene, camera);

    if (testAvatar2.loaded)
        testAvatar2.mixer.update(clock.getDelta());
    // Render the minimap every 10 frames
    frame++;
    if (frame % 10 === 0)
    {
        testAvatar.morphs.tryChangeMorph(Morphs.Fat, Math.random());
        testAvatar2.morphs.tryChangeMorph(Morphs.Muscle, Math.random());

        let pos = controls.getObject().position;
        MiniMap.renderMiniMap(pos.x, pos.z);
    }
}

