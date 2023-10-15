import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Move, playerCollisions } from './Scripts/Move';
import { player } from './Scripts/Player';
import { StartBattle } from './Scripts/StartBattle';


const interactables = new Array();
export const container = document.getElementById('container');
import {inBattle, AnimateBattle} from './Scripts/StartBattle';


export function constainerSize() {
    return{
        width: container.offsetWidth,
        height: container.offsetHeight,
        aspect: container.offsetWidth / container.offsetHeight
    }
}

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, constainerSize().aspect, 0.1, 1000);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ container });
renderer.setSize(constainerSize().width, constainerSize().height);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
export const cube = {
    cube: new THREE.Mesh(geometry, material),
    interact: function () {
        StartBattle();
}}

interactables.push(cube);
scene.add(cube.cube);

camera.position.set(0, 1.5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

scene.background = new THREE.Color( 0x88ccee );
scene.fog = new THREE.Fog( 0x88ccee, 0, 75 );

export const controls = new PointerLockControls(camera, document.body);

animate();

window.addEventListener('resize', () => {
    renderer.setSize(constainerSize().width, constainerSize().height);
    camera.aspect = constainerSize().aspect;
    camera.updateProjectionMatrix();
});

scene.add(controls.getObject());

container.addEventListener('click', function () {
    controls.lock();
    clock.getDelta();
});


controls.addEventListener('lock', function () {
    //  instructions.style.display = 'none';
    //  blocker.style.display = 'none';
});
controls.addEventListener('unlock', function () {
    //    blocker.style.display = 'block';
    //    instructions.style.display = '';
});

const loader = new GLTFLoader();
loader.load('/Resources/Grass Platform.glb', function (gltf) {
    gltf.scene.position.y = -1;
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    scene.add(gltf.scene);
    const g2 = gltf.scene.clone();
    g2.position.x += 100;
    scene.add(g2);
}, undefined, function (error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    if (inBattle){
        AnimateBattle();
        return;
    }
    cube.cube.rotation.x += 0.01;
    cube.cube.rotation.y += 0.01;
    
    
    if (controls.isLocked === true){ 
        Move(clock.getDelta());
        playerCollisions(interactables);
    }
    renderer.render(scene, camera);
//controls.getObject().position.y += (velocity.y * delta);

}


