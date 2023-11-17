import { BaseOrgans } from "./BaseOrgan.js";

class Boob {
    constructor(size){
        this.size = size;
    }

}

export class Boobs extends BaseOrgans{
    constructor(){
        super();
    }
    addBoob(size = 1){
        this.List.push(new Boob(size));
    }
}