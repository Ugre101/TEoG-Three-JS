import { CockVore } from "../../Vore/VoreOrgans/VoreOrgan";
import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

class Dick extends BaseOrgan {
    constructor(size: number) {
        super(size);
    }
}
export class Dicks extends BaseOrgans {
    public Vore:CockVore = new CockVore();
    constructor() {
        super(SexualFluids.Cum);
    }
    addDick(size = 1) {
        this.List.push(new Dick(size));
    }
    growNewCost() : number{
        let cost = 30 + Math.pow(this.List.length, 2) * 30; // Exponential growth formula
        return cost;
    }
}
