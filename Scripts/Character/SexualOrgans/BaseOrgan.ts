import { Stat } from "../Stats";
import { SexualFluids } from "./SexualFluids/SexualFluid";


export class BaseOrgan extends Stat{
    
    constructor(size: number){
        super(size);
    }
    
    decrease(by: number): boolean{
        super.decrease(by);
        return this.baseValue <= 0;
    }
}
