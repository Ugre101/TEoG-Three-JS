
import { BaseOrgan } from "./BaseOrgan.js";
import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Vagina extends BaseOrgan{
    constructor(size: number){
        super(size);
    }
}

export class Vaginas extends BaseOrgans{
    constructor(){
        super(SexualFluids.VaginalDischarge);
    }
    addPussy(size = 1){
        this.List.push(new Vagina(size));
    }


}