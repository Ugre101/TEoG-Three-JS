import { BaseOrgan } from "./BaseOrgan.js";
import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Boob extends BaseOrgan{
    constructor(size: number){
        super(size);
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