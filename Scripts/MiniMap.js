import * as THREE from "three";

const container = document.getElementById("MiniMap");
function containerSize() {
    return {
        width: container.offsetWidth,
        height: container.offsetHeight,
        aspect: container.offsetWidth / container.offsetHeight,
    };
}

const miniScene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    containerSize().aspect,
    0.1,
    1000
);
camera.position.set(0, 150, 0);
camera.rotateX(-Math.PI / 2);
miniScene.add(camera);

const testGeo = new THREE.BoxGeometry();
const testMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const testCube = new THREE.Mesh(testGeo, testMat);
testCube.position.set(0, 0, 0);
testCube.scale.set(15, 15, 15);
miniScene.add(testCube);

const renderer = new THREE.WebGLRenderer({ container });
renderer.setSize(containerSize().width, containerSize().height);
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
miniScene.add(ambientLight);

export function addMiniMapObject(clone, x, z) {
    const c = clone.clone();
    c.position.x = x;
    c.position.z = z;
    miniScene.add(c);
}

export function renderMiniMap(x, z) {
    camera.position.set(x, 300, z);
    testCube.position.set(x, 0, z);
    renderer.render(miniScene, camera);
}
