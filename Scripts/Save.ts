import { Character } from "./Character/Character";
import { BuildingData } from "./Dorm/DormBuildings/Buildings/Building";
import { DormMate } from "./Dorm/DormMate";
import { PlayerClass } from "./Player";

export class Save {
    player: PlayerClass;
    date: Date;
    dormMates: DormMate[];
    dormBuildings: BuildingData[];

    constructor(player: PlayerClass,date: Date,dormMates: DormMate[], dormBuildings: BuildingData[]) {
        this.player = player;
        this.date = date;
        this.dormMates = dormMates;
        this.dormBuildings = dormBuildings;
    }
}
