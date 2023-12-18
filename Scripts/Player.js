import {Race} from "./Character/RaceSystem.js";
import {Character} from "./Character/Character.js";
import {VoreSystem} from "./Vore/VoreSystem.js";


class PlayerClass extends Character{
    constructor(Race){
        super(Race);
        this.VoreSystem = new VoreSystem();
    }
}

export let Player = new PlayerClass(Race.Human);


export function LoadPlayer(newPlayer) {
    Player = newPlayer;
}