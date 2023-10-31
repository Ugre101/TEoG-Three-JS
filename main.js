import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Move, playerCollisions } from "./Scripts/Move";
import { Player, Character } from "./Scripts/Player";
import { Mod } from "./Scripts/Stats";
import { Race } from "./Scripts/RaceSystem";
import { StartBattle } from "./Scripts/StartBattle";
import * as SaveMenu from "./Scripts/Menus/SaveMenu";
import * as InventoryMenu from "./Scripts/Menus/InventoryMenu";
import * as LevelMenu from "./Scripts/Menus/LevelMenu";
import * as LooksMenu from "./Scripts/Menus/LooksMenu";
import * as MiniMap from "./Scripts/MiniMap";
import * as OptionsMenu from "./Scripts/Menus/OptionsMenu";

const interactables = new Array();
export const container = document.getElementById("container");
import { inBattle, AnimateBattle } from "./Scripts/StartBattle";
import { drawFistMap } from "./Scripts/Maps/FirstMap";

export function constainerSize() {
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
    constainerSize().aspect,
    0.1,
    1000
);

export const controls = new PointerLockControls(camera, document.body);


scene.add(camera);

const renderer = new THREE.WebGLRenderer({ container });
renderer.setSize(constainerSize().width, constainerSize().height);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
export const cube = {
    cube: new THREE.Mesh(geometry, material),
    interact: function () {
        controls.unlock();
        let testEnemy = new Character();
        StartBattle( [testEnemy]);
    },
};

interactables.push(cube);
scene.add(cube.cube);

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


animate();

window.addEventListener("resize", () => {
    renderer.setSize(constainerSize().width, constainerSize().height);
    camera.aspect = constainerSize().aspect;
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

/*
const loader = new GLTFLoader();
loader.load('/Resources/Forest Grass.glb', function (gltf) {
    gltf.scene.position.y = -1;
    gltf.scene.scale.set(5, 5, 5);
    scene.add(gltf.scene);
    const g2 = gltf.scene.clone();
    g2.position.x += 100;
    g2.rotation.y += Math.PI / 2;
    scene.add(g2);
}, undefined, function (error) {
    console.error(error);
});
*/
drawFistMap();
function animate() {
    frame++;
    requestAnimationFrame(animate);
    if (inBattle) {
        AnimateBattle();
        return;
    }
    cube.cube.rotation.x += 0.01;
    cube.cube.rotation.y += 0.01;

    if (controls.isLocked === true) {
        Move(clock.getDelta());
        playerCollisions(interactables);
    }
    renderer.render(scene, camera);
    let pos = controls.getObject().position;
    if (frame % 10 == 0) MiniMap.renderMiniMap(pos.x, pos.z);
    //controls.getObject().position.y += (velocity.y * delta);
}

console.log(Player.BodyStats.weight);
