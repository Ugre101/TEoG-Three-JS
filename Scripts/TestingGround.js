import {Character} from "./Character/Character.js";
import {Race} from "./Character/RaceSystem.js";
import {Player} from "./Player.js";

export function TestStuff(){
    let enemy = new Character(Race.Orc);
    enemy.Masc.gainEssence(100);
    console.log(enemy);
   // Player.VoreSystem.addPrey(enemy);
    console.log(Player.VoreSystem);
}