import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

class Dick extends BaseOrgan {
    constructor(size: number) {
        super(size);
    }
}
export class Dicks extends BaseOrgans {
    constructor() {
        super(SexualFluids.Cum);
    }
    addDick(size = 1) {
        this.List.push(new Dick(size));
    }
}
