import {Character} from "./Character/Character";
import {Race} from "./Character/RaceSystem";
import {Player} from "./Player";
import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {scene} from "../main";
import { DormManagerInstance } from "./Dorm/DormManager";
import { Enemy } from "./Enemy/Enemy";
import { EnemyAvatar } from "./Enemy/EnemyAvatar";
import { startDialogue } from "./Dialogue/DialogueMenu";
import { testDialogue } from "./Dialogue/TestDialogue";
import { ReqNeedDick } from "./AfterBattle/AfterBattleActions/AfterAction";
import { PerksDict } from "./Perk";

export async function TestStuff(){
    let enemy = new Character(Race.Human);
    enemy.Masc.gainEssence(100);
    console.log(enemy);
   // Player.VoreSystem.addPrey(enemy);
    console.log(Player.VoreSystem);

    const loader = new GLTFLoader();


    let key = PerksDict.get("Sturdy");
    console.log(key);


    Player.Dicks.Vore.addPrey(enemy);
    console.log(Player.Dicks);

    //startDialogue(testDialogue);
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

