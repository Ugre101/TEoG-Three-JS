
import { VaginaVore } from "../../Vore/VoreOrgans/VoreOrgan";
import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

class Vagina extends BaseOrgan{
    constructor(size: number){
        super(size);
    }
}

export class Vaginas extends BaseOrgans{
    public Vore: VaginaVore = new VaginaVore();
    constructor(){
        super(SexualFluids.VaginalDischarge);
    }
    addPussy(size = 1){
        this.List.push(new Vagina(size));
    }


}