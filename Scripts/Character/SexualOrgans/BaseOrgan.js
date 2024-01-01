import { Stat } from "../Stats";
import { SexualFluids } from "./SexualFluids/SexualFluid";

export class BaseOrgan extends Stat{
    constructor(size){
        super(size);
    }

    /**
     * @param {number} by
     * @returns {boolean} if value is zero or less
     */
    decrease(by){
        super.decrease(by);
        return this.baseValue <= 0;
    }
}

