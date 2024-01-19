import { Character } from "./Character/Character";
import { BuildingData } from "./Dorm/DormBuildings/Buildings/Building";
import { DormMate } from "./Dorm/DormMate";
import { PlayerClass } from "./Player";

export class Save {
    /**
     * 
     * @param {PlayerClass} player 
     * @param {Date} date 
     * @param {DormMate[]} dormMates 
     * @param {BuildingData[]} dormBuildings 
     */
    constructor(player,date,dormMates, dormBuildings) {
        this.player = player;
        this.date = date;
        this.dormMates = dormMates;
        this.dormBuildings = dormBuildings;
    }
}
