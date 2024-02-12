import { Character } from "../../../Character/Character";
import {PlayerWallet} from "../../../Wallet";

export class BuildingData{
    public name: string;
    public tier: number;
    constructor(name: string, tier: number){
        this.name = name;
        this.tier = tier;
    }
}


export class Building{
    public data: BuildingData;
    public description: string;
    public costs: number[];
    constructor(buildingData: BuildingData, description: string){
        this.data = buildingData;
        this.description = description;
        this.costs = [100,300,500];
    }
  
    tick(ticks: number, dormMates: Character[]){

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



