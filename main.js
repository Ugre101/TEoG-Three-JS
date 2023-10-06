import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Move } from './Move';

const container = document.getElementById('container');

function constainerSize() {
    return{
        width: container.offsetWidth,
        height: container.offsetHeight,
        aspect: container.offsetWidth / container.offsetHeight
    }
}



let prevTime = performance.now();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, constainerSize().aspect, 0.1, 1000);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ container });
renderer.setSize(constainerSize().width, constainerSize().height);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

export let controls = new PointerLockControls(camera, document.body);

animate();

window.addEventListener('resize', () => {
    renderer.setSize(constainerSize().width, constainerSize().height);
    camera.aspect = constainerSize().aspect;
    camera.updateProjectionMatrix();
});

scene.add(controls.getObject());

container.addEventListener('click', function () {
    controls.lock();
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
}, undefined, function (error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    const time = performance.now();
    
    if (controls.isLocked === true){ 
        const delta = (time - prevTime) / 1000;
        Move(delta);
    }
    prevTime = time;
    renderer.render(scene, camera);
//controls.getObject().position.y += (velocity.y * delta);

}


