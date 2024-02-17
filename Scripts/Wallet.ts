
class Wallet{
    gold: number;
    constructor(startGold: number){
        this.gold = startGold;
    }
  
    addGold(amount: number){
        this.gold += amount;
    }
 
    canAfford(cost: number): boolean{
        return this.gold >= cost;
    }

    tryBuy(cost: number): boolean{
        if (this.canAfford(cost)){
            this.gold -= cost;
            return true;
        }
        return false;
    }
}

export let PlayerWallet = new Wallet(1000);