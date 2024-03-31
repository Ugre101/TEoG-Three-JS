import { BallsVore } from "../../Vore/VoreOrgans/VoreOrgan";
import { BaseOrgan } from "./BaseOrgan";
import { BaseOrgans } from "./BaseOrgans";
import { SexualFluids } from "./SexualFluids/SexualFluid";

class Ball extends BaseOrgan{
    constructor(size: number){
        super(size);
    }
}

export class Balls extends BaseOrgans{
    public Vore: BallsVore = new BallsVore();
    constructor(){
        super(SexualFluids.Cum);
    }
    addBall(size = 1){
        this.List.push(new Ball(size));
    }
    growNewCost() : number{
        let cost = 30 + Math.pow(this.List.length, 2) * 30; // Exponential growth formula
        return cost;
    }
}