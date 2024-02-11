import { BaseOrgan } from "./BaseOrgan.js";
import { BaseOrgans } from "./BaseOrgans.js";
import { SexualFluids } from "./SexualFluids/SexualFluid.js";

class Ball extends BaseOrgan{
    constructor(size: number){
        super(size);
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