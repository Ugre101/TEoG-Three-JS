import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Boob {
    constructor(size){
        this.size = size;
    }

}

export class Boobs extends BaseOrgans{
    constructor(){
        super(SexualFluids.Milk);
    }
    addBoob(size = 1){
        this.List.push(new Boob(size));
    }
}