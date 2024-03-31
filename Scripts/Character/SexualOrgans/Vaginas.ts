
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
    growNewCost() : number{
        let cost = 30 + Math.pow(this.List.length, 2) * 30; // Exponential growth formula
        return cost;
    }
}