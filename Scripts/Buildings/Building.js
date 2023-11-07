import {PlayerWallet} from "../Wallet";

class Building{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tier = 0;
        this.costs = [100,300,500];
    }
    tick(ticks){

    }
    tryUpgrade(){
        if (PlayerWallet.tryBuy(this.costs[this.tier])){
            this.tier++;
            return true;
        }
        return false;
    }
}