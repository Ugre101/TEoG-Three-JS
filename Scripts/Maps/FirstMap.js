import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { scene } from "../../main.js";
import { addMiniMapObject } from "../MiniMap.js";

const scale = 5;
const dist = scale * 20;

export function drawFistMap() {
    const loader = new GLTFLoader();
    loader.load("/Resources/Forest Grass.glb",
        function (gltf) {
            gltf.scene.position.y = -1;
            gltf.scene.scale.set(scale, scale, scale);
            scene.add(gltf.scene);
            addMiniMapObject(gltf.scene, 0, 0);
            addClone(dist, 0);
            addClone(dist * 2, 0);
            addClone(-dist, 0);
            addClone(0, dist);
            addClone(0, -dist);
            function addClone(x = 0, z = 0) {
                const c = gltf.scene.clone();
                c.position.x += x;
                c.position.z += z;
                c.rotation.y += Math.PI / 2;
                scene.add(c);
                addMiniMapObject(c, c.position.x, c.position.z);
            }
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );
}
