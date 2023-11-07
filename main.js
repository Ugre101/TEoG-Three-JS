import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Move, playerCollisions } from "./Scripts/Move";
import { Player, Character } from "./Scripts/Player";
import { Mod } from "./Scripts/Stats";
import { Race } from "./Scripts/RaceSystem";
import { SetupBattle } from "./Scripts/Battle/SetupBattle";
import * as SaveMenu from "./Scripts/Menus/SaveMenu";
import * as InventoryMenu from "./Scripts/Menus/InventoryMenu";
import * as LevelMenu from "./Scripts/Menus/LevelMenu";
import * as LooksMenu from "./Scripts/Menus/LooksMenu";
import * as MiniMap from "./Scripts/MiniMap";
import * as OptionsMenu from "./Scripts/Menus/OptionsMenu";

export const interactables = [];
export const container = document.getElementById("container");
import { AnimateBattle } from "./Scripts/Battle/SetupBattle";
import { drawFistMap } from "./Scripts/Maps/FirstMap";
import { inBattle } from "./Scripts/Battle/BattleManager";
import {AvatarManager} from "./Scripts/Avatar/AvatarHandler";
import {EnemyAvatar} from "./Scripts/Avatar/EnemyAvatar";
import {MenuManagerInstance} from "./Scripts/Menu";

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

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

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

const backTextureCube = new THREE.CubeTextureLoader().load(backUrls);
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
drawFistMap();

let testAvatar = new EnemyAvatar(new Character(Race.Human));
animate();

let loaded = await testAvatar.LoadAndSetPos({x:2,y:-1,z:-4});
interactables.push(testAvatar);
scene.add(loaded);


function animate() {
    requestAnimationFrame(animate);
    if (inBattle) {
        AnimateBattle();
        return;
    }

    // If a menu is open, don't animate the player
    if (MenuManagerInstance.isOpen){
        return;
    }

    if (testAvatar.loaded) {
        testAvatar.obj.rotation.y += 0.01;
        testAvatar.obj.position.x += 0.005;
    }

    if (controls.isLocked === true) {
        Move(clock.getDelta());
        playerCollisions(interactables);
    }
    renderer.render(scene, camera);
    frame++;
    if (frame % 10 === 0)
    {
        let pos = controls.getObject().position;
        MiniMap.renderMiniMap(pos.x, pos.z);
    }
    //controls.getObject().position.y += (velocity.y * delta);
}

