import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Dick {
    constructor(size) {
        this.size = size;
    }
}
export class Dicks extends BaseOrgans {
    constructor() {
        super(SexualFluids.Cum);
    }
    addDick(size) {
        this.List.push(new Dick(size));
    }
}
