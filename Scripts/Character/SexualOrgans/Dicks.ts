import { BaseOrgan } from "./BaseOrgan.js";
import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

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
