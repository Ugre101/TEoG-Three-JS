
class Wallet{
    constructor(startGold){
        this.gold = startGold;
    }
    /**
     * @param {number} amount 
     */
    addGold(amount){
        this.gold += amount;
    }
    /**
     * @param {number} cost 
     * @returns {boolean} if you can afford
     */
    canAfford(cost){
        return this.gold >= cost;
    }

    /**
     * @param {number} cost 
     * @returns {boolean} if you succesfully payed
     */
    tryBuy(cost){
        if (this.canAfford(cost)){
            this.gold -= cost;
            return true;
        }
        return false;
    }
}

export let PlayerWallet = new Wallet(1000);