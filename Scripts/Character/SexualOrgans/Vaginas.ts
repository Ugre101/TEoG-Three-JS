
import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

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