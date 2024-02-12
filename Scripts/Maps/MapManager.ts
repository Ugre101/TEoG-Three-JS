import {scene} from "../../main";
import {addMiniMapObject} from "../MiniMap";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";


import grassUrl from '/Resources/Forest Grass.glb?url';

class MapManager{
    firstMap:Map = new Map(grassUrl,[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}]);
}
const scale = 5;
const dist = scale * 20;

class Map{
    texturePath:string;
    cords:{x:number,y:number}[];

    constructor(textureFile, cords){
        this.texturePath =  textureFile;
        this.cords = cords;
    }

    loadTexture(){
        console.log(this.cords);
        const loader = new GLTFLoader();
        const cords = this.cords;
        loader.load(this.texturePath, function (gltf) {
                gltf.scene.position.y = -1;
                gltf.scene.scale.set(scale, scale, scale);
                cords.forEach(c => {
                    gltf.scene.position.x = c.x * dist;
                    gltf.scene.position.z = c.y * dist;
                    let ground = gltf.scene.clone();
                    scene.add(ground);
                    addMiniMapObject(ground, c.x * dist, c.y * dist);
                });
                // c.rotation.y += Math.PI / 2;

            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

    }
}
export const MapManagerInstance = new MapManager();
