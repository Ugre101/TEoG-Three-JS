import {PlayerWallet} from "../../Wallet";

export class Building{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tier = 0;
        this.costs = [100,300,500];
    }
    tick(ticks){

    }
    tryUpgrade(){
        if (this.tier >= this.costs.length)
            return false;
        if (PlayerWallet.tryBuy(this.costs[this.tier])){
            this.tier++;
            return true;
        }
        return false;
    }
}

const Dorm = new Building("Dorm","A place where your followers sleep");
const Kitchen = new Building("Kitchen","A place where your followers eat to keep healthy or gain weight");
Kitchen.tick = function(ticks) {

}
const Gym = new Building("Gym","A place where your followers train their bodies to gain muscle or lose fat");
Gym.tick = function(ticks) {

}
const DormFarm = new Building("Dorm Farm","A place where your followers grow food to feed themselves and gather resources for you");
DormFarm.tick = function(ticks) {

}
const DormMine = new Building("Dorm Mine","A place where your followers mine resources for you");
DormMine.tick = function(ticks) {

}
const JailDungeon = new Building("Jail Dungeon","A place where your followers punish your enemies or your followers who misbehave");