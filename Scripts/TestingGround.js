import {Character} from "./Character/Character.js";
import {Race} from "./Character/RaceSystem.js";
import {Player} from "./Player.js";
import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {scene} from "../main.js";
import { DormManagerInstance } from "./Dorm/DormManager.js";
import { Enemy } from "./Enemy/Enemy.js";
import { EnemyAvatar } from "./Enemy/EnemyAvatar.js";

export async function TestStuff(){
    let enemy = new Character(Race.Human);
    enemy.Masc.gainEssence(100);
    console.log(enemy);
   // Player.VoreSystem.addPrey(enemy);
    console.log(Player.VoreSystem);

    const loader = new GLTFLoader();



    /*
    let mixer;
    const AnimationClips = [];
    loader.load("/Resources/Characters/HumanFemaleFuta.glb", function (gltf) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        // Load animations 
        loader.load("/Resources/Animations/VoreAnimations2.glb", function (gltf) {
            gltf.animations.forEach((clip) => {
                const animationsClip = mixer.clipAction(clip);
                AnimationClips[clip.name] = animationsClip;
            });
            AnimationClips["Unbirth"].;
        }, undefined, function (error) {
            console.error(error);
        });

        gltf.scene.position.set(5, 1, 5);
        scene.add(gltf.scene);
    } , undefined, function (error) {
        console.error(error);
    });

    */




}

