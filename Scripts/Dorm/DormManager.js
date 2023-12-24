import {Character} from "../Character/Character.js";
import { BuildingsManagerInstance } from "./DormBuildings/BuildingsManager.js";
import { DormMate } from "./DormMate.js";

class DormManager{
    constructor(){
        this.dormMates = [];
    }
    tick(ticks){
        BuildingsManagerInstance.tickBuildings(ticks, this.dormMates);
        for(var i = 0; i < this.dormMates.length; i++){
            this.dormMates[i].tick(ticks);
        }
    }
    addDormMate(character){
        if (character instanceof Character){
            let dormMate = new DormMate();
            Object.assign(dormMate,character);
            this.dormMates.push(dormMate);
        } else {
            console.warn("Not a character");
        }
    }
    removeDormMate(index){
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
