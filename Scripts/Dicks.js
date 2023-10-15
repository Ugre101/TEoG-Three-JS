class Dick {
    constructor(size) {
        this.size = size;
    }
}
export class Dicks {
    constructor() {
        this.Dicks = [];
    }
    addDick(size) {
        let d = new Dick(size);
        this.Dicks.push(d);
        return d;
    }
    removeDick(index) {
        if (this.Dicks.findIndex(index) > 0) {
            this.Dicks.splice(index, 1);
            return true;
        }
        return false;
    }
    removeSmallest() {
    }
}
