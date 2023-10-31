import { BaseOrgans } from "./BaseOrgan.js";

class Dick {
    constructor(size) {
        this.size = size;
    }
}
export class Dicks extends BaseOrgans {
    constructor() {
        super();
    }
    addDick(size) {
        let d = new Dick(size);
        this.List.push(d);
        return d;
    }
}
