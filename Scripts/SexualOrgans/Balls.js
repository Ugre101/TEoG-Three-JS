import { BaseOrgans } from "./BaseOrgan";

class Ball{
    constructor(size){
        this.size = size;
    }
}

export class Balls extends BaseOrgans{
    constructor(){
        super();
    }
    addBall(size = 1){
        this.List.push(new Ball(size));
    }
}