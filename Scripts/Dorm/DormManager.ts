import {Character} from "../Character/Character";
import { BuildingsManagerInstance } from "./DormBuildings/BuildingsManager";
import { DormMate } from "./DormMate";

class DormManager{
    public dormMates: DormMate[] = [];
    tick(ticks: number){
        BuildingsManagerInstance.tickBuildings(ticks, this.dormMates);
        for(var i = 0; i < this.dormMates.length; i++){
            this.dormMates[i].tick(ticks);
        }
    }
    addDormMate(character: Character){
        let dormMate = new DormMate();
        Object.assign(dormMate,character);
        this.dormMates.push(dormMate);
    }
    removeDormMate(index: number){
        if (index < this.dormMates.length)
            return this.dormMates.splice(index,1);
    }
    save (){
        return JSON.stringify(this.dormMates);
    }
    load (data){
        if (!data) return;
        this.dormMates = data;
    }
}

export const DormManagerInstance = new DormManager();
