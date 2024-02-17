import {Race} from "./Character/RaceSystem";
import {Character} from "./Character/Character";
import {VoreSystem} from "./Vore/VoreSystem";


export class PlayerClass extends Character{
    constructor(Race: Race){
        super(Race);
        this.VoreSystem = new VoreSystem();
    }
}

export let Player = new PlayerClass(Race.Human);


export function LoadPlayer(newPlayer: PlayerClass) {
    Player = newPlayer;
}