import { BaseOrgans } from "./BaseOrgan.js";

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