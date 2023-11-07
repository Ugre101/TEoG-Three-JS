class Wallet{
    constructor(startGold){
        this.gold = startGold;
    }
    addGold(amount){
        this.gold += amount;
    }
    canAfford(cost){
        return this.gold >= cost;
    }
    tryBuy(cost){
        if (this.canAfford(cost)){
            this.gold -= cost;
            return true;
        }
        return false;
    }
}

export let PlayerWallet = new Wallet(1000);