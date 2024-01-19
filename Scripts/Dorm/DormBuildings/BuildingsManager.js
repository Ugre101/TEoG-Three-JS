import { Dorm } from "./Buildings/Dorm.js";
import { Gym } from "./Buildings/Gym.js";
import { Kitchen } from "./Buildings/Kitchen.js";
import { DormFarm } from "./Buildings/DormFarm.js";
import { DormMine } from "./Buildings/DormMine.js";
import { JailDungeon } from "./Buildings/JailDungeon.js";

class BuildingsManager {
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
    tickBuildings(ticks, dormMates){
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



