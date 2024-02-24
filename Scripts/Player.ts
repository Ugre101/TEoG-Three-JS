import {Race} from "./Character/RaceSystem";
import {Character} from "./Character/Character";
import { PerksDict } from "./Perk";


export class PlayerClass extends Character{
    constructor(Race: Race){
        super(Race);
    }
}

export let Player = new PlayerClass(Race.Human);


export function LoadPlayer(newPlayer: PlayerClass) {
    Player = newPlayer;
    Player.LevelSystem.perks.forEach((perk) => {
        let perkObj = PerksDict.get(perk);
        if (perkObj) {
            perkObj.onGain(Player);
        }
    });
}