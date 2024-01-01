import { BaseOrgans } from "./BaseOrgan.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Ball{
    constructor(size){
        this.size = size;
    }
}

export class Balls extends BaseOrgans{
    constructor(){
        super(SexualFluids.Cum);
    }
    addBall(size = 1){
        this.List.push(new Ball(size));
    }
}