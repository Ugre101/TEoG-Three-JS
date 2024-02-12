import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

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