import { Dorm } from "./Buildings/Dorm";
import { Gym } from "./Buildings/Gym";
import { Kitchen } from "./Buildings/Kitchen";
import { DormFarm } from "./Buildings/DormFarm";
import { DormMine } from "./Buildings/DormMine";
import { JailDungeon } from "./Buildings/JailDungeon";
import { Building } from "./Buildings/Building";
import {DormMate} from "../DormMate";

class BuildingsManager {
    public buildings: Building[];
    constructor() {
        this.buildings = [
            Dorm,
            Kitchen,
            Gym,
            DormFarm,
            DormMine,
            JailDungeon,
        ];
    }
    tickBuildings(ticks: number, dormMates: DormMate[]){
        this.buildings.forEach(b => b.tick(ticks, dormMates));
    }

    saveBuildings(){
        const data = this.buildings.map(b => b.data);
        return data;
    }
    loadBuildings(data) {
        if (!data) return;

        for (let i = 0; i < data.length; i++) {
            const buildingData = data[i];
            if (!buildingData) {
                continue;
            }
            const building = this.buildings.find(b => b.data.name === buildingData.name);
            if (building) {
                building.data.tier = buildingData.tier;
            }
        }
    }
}

export const BuildingsManagerInstance = new BuildingsManager();



