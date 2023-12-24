import {Character} from "./Character/Character.js";
import {Race} from "./Character/RaceSystem.js";
import {Player} from "./Player.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {scene} from "../main.js";
import { DormManagerInstance } from "./Dorm/DormManager.js";
import { Enemy } from "./Enemy/Enemy.js";

export function TestStuff(){
    let enemy = new Character(Race.Orc);
    enemy.Masc.gainEssence(100);
    console.log(enemy);
   // Player.VoreSystem.addPrey(enemy);
    console.log(Player.VoreSystem);

    const loader = new GLTFLoader();
    loader.load("/Resources/Houses/BasicHouse.glb", function (gltf) {
            gltf.scene.position.set(10, -1, 0);
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
    });
    loader.load("/Resources/Houses/WindShelter.glb", function (gltf) {
        gltf.scene.scale.set(0.5,0.5,0.5);
        gltf.scene.position.set(10, -0.6, 10);
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });

    DormManagerInstance.addDormMate(enemy);
    let e2 = new Enemy(Race.Human);
    DormManagerInstance.addDormMate(e2);

    let save = DormManagerInstance.save();
    console.log(save);
    DormManagerInstance.addDormMate(e2);
    console.log(DormManagerInstance.dormMates.length);
    DormManagerInstance.load(JSON.parse(save));
    console.log(DormManagerInstance.dormMates.length);
}

