
export enum SexualFluids {
    Cum = "Cum",
    Milk = "Milk",
    VaginalDischarge = "Vaginal discharge",
}


function SexualFluidsDesc(name: SexualFluids) {
    switch (name) {
        case SexualFluids.Cum:
            return "Cum";
        case SexualFluids.Milk:
            return "Milk";
    }
    return "";
}

export class SexualFluid {
    name:SexualFluids;
    amount: number = 0;
    maxAmount: number = 100;
    regenRate: number = 1;
    constructor(name: SexualFluids) {
        this.name = name;
    }
    getDesc() {
        return SexualFluidsDesc(this.name);
    }
    tick(ticks: number) {
        if (this.amount < this.maxAmount) {
            this.amount += this.regenRate * ticks;
        }
    }
    refill(amount:number) : number{
        let overflow = 0;
        this.amount += amount;
        if (this.amount > this.maxAmount){
            overflow = this.amount - this.maxAmount;
            this.amount = this.maxAmount;
        }
        return overflow;
    }
    release(percent: number) : number {
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
