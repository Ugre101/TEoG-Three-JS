
import { BaseOrgan } from "./BaseOrgan.js";
import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Vagina extends BaseOrgan{
    constructor(size){
        super(size);
    }
}

class Vaginas extends BaseOrgans{
    constructor(){
        super(SexualFluids.VaginalDischarge);
    }
    addPussy(size = 1){
        this.List.push(new Vagina(size));
    }


}