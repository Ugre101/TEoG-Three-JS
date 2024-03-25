import { BreastVore } from "../../Vore/VoreOrgans/VoreOrgan";
import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

class Boob extends BaseOrgan{
    constructor(size: number){
        super(size);
    }

}

export class Boobs extends BaseOrgans{
    public Vore: BreastVore = new BreastVore();
    constructor(){
        super(SexualFluids.Milk);
    }
    addBoob(size = 1){
        this.List.push(new Boob(size));
    }
}