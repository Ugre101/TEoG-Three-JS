import {Race} from "./Character/RaceSystem.js";
import {Character} from "./Character/Character.js";
import {VoreSystem} from "./Vore/VoreSystem.js";

export let Player = new Character(Race.Human);
Player.VoreSystem = new VoreSystem();

export function LoadPlayer(newPlayer) {
    Player = newPlayer;
}