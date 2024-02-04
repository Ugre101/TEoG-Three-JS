import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { Move, playerCollisions } from "./Scripts/Move";
import { Character } from "./Scripts/Character/Character.js";
import { Mod } from "./Scripts/Character/Stats.js";
import { Race } from "./Scripts/Character/RaceSystem.js";
import * as SaveMenu from "./Scripts/Menus/SaveMenu";
import * as InventoryMenu from "./Scripts/Menus/InventoryMenu";
import * as LevelMenu from "./Scripts/Menus/LevelMenu";
import * as LooksMenu from "./Scripts/Menus/LooksMenu";
import * as MiniMap from "./Scripts/MiniMap";
import * as OptionsMenu from "./Scripts/Menus/OptionsMenu";

export const autoIntractable = [];
export const interactable = [];
export const container = document.getElementById("container");
import { AnimateBattle } from "./Scripts/Battle/SetupBattle";
import { inBattle } from "./Scripts/Battle/BattleManager";
import {AvatarManager} from "./Scripts/Avatar/AvatarHandler";
import {CharacterAvatar} from "./Scripts/Avatar/CharacterAvatar";
import {MenuManagerInstance} from "./Scripts/Menu";
import {Morphs} from "./Scripts/Avatar/Morphs";
import {MapManagerInstance} from "./Scripts/Maps/MapManager";
import {EnemyAvatar} from "./Scripts/Enemy/EnemyAvatar.js";
import {TestStuff} from "./Scripts/TestingGround.js";
import { InDialogue } from "./Scripts/Dialogue/DialogueMenu.js";

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

const renderer = new THREE.WebGLRenderer({ container });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(containerSize().width, containerSize().height);
container.appendChild(renderer.domElement);

camera.position.set(0, 1.5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

const backPath = "/Resources/ForestBackground/";
const backFormat = ".jpg";
const backUrls = [
    backPath + "px" + backFormat,
    backPath + "nx" + backFormat,
    backPath + "py" + backFormat,
    backPath + "ny" + backFormat,
    backPath + "pz" + backFormat,
    backPath + "nz" + backFormat,
];
import px from '/Resources/ForestBackground/px.jpg';
import nx from '/Resources/ForestBackground/nx.jpg';
import py from '/Resources/ForestBackground/py.jpg';
import ny from '/Resources/ForestBackground/ny.jpg';
import pz from '/Resources/ForestBackground/pz.jpg';
import nz from '/Resources/ForestBackground/nz.jpg';

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


// await TestStuff();

const testAvatar = new EnemyAvatar(new Character(Race.Human));
const testAvatar2 = new CharacterAvatar(new Character(Race.Human));
async function loadTestAvatar(){
    await testAvatar.LoadAndSetPos({x:2,y:-1,z:-4});
    await testAvatar2.LoadAndSetPos({x:4,y:-1,z:-4});
    testAvatar.obj.scale.set(1.5,1.5,1.5);
    testAvatar2.obj.scale.set(1.5,1.5,1.5);
    autoIntractable.push(testAvatar);
    autoIntractable.push(testAvatar2);
    scene.add(testAvatar.obj);
    scene.add(testAvatar2.obj);

    let clip = testAvatar2.animationsClips["Unbirth"];
    clip.play();
}

animate();

await loadTestAvatar();



function animate() {
    requestAnimationFrame(animate);
    if (inBattle) {
        AnimateBattle();
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

