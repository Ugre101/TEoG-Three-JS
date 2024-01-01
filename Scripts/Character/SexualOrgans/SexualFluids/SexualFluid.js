
/**
 * @enum {string}
 * @readonly
 */
export const SexualFluids = {
    Cum: "Cum",
    Milk: "Milk",
    VaginalDischarge: "Vaginal discharge",
}



function SexualFluidsDesc(name) {
    switch (name) {
        case SexualFluids.Cum:
            return "Cum";
        case SexualFluids.Milk:
            return "Milk";
    }
    return "";
}

export class SexualFluid {
    /**
     * 
     * @param {SexualFluids} name 
     */
    constructor(name) {
        this.name = name;
        this.amount = 0;
        this.maxAmount = 100;
        this.regenRate = 1;
    }
    getDesc() {
        return SexualFluidsDesc(this.name);
    }
    tick(ticks) {
        if (this.amount < this.maxAmount) {
            this.amount += this.regenRate * ticks;
        }
    }
    refill(amount){
        let overflow = 0;
        this.amount += amount;
        if (this.amount > this.maxAmount){
            overflow = this.amount - this.maxAmount;
            this.amount = this.maxAmount;
        }
        return overflow;
    }
    release(percent){
        let tryRelease = this.maxAmount * percent;
        if (tryRelease > this.amount){
            tryRelease = this.amount;
        }
        this.amount -= tryRelease;
        return tryRelease;
    }
    recover(){
        this.amount = this.maxAmount;
    }
}
