import { Character } from "../../../Character/Character";
import {PlayerWallet} from "../../../Wallet";

export class BuildingData{
    constructor(name, tier){
        this.name = name;
        this.tier = tier;
    }
}


export class Building{
/**
 * @param {BuildingData} buildingData
 * @param {String} description
 */
    constructor(buildingData, description){
        this.data = buildingData;
        this.description = description;
        this.costs = [100,300,500];
    }
    /**
     * @param {number} ticks 
     * @param {Character} dormMates 
     */
    tick(ticks, dormMates){

    }
    tryUpgrade(){
        if (this.data.tier >= this.costs.length)
            return false;
        if (PlayerWallet.tryBuy(this.costs[this.data.tier])){
            this.data.tier++;
            return true;
        }
        return false;
    }
}



