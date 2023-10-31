export class BaseOrgans {
    constructor() {
        this.List = [];
    }

    remove(index) {
        if (this.List.length > index) {
            this.List.splice(index, 1);
            return true;
        }
        return false;
    }
    removeSmallest() {
        let indexSmallest = -1;
        for(let i = 0; i < this.List.length; i++){
            if(indexSmallest == -1 || this.List[i].size < this.List[indexSmallest].size){
                indexSmallest = i;
            }
        }
        if (indexSmallest > -1){
            this.List.splice(indexSmallest,1);
        }
    }
    getBiggest(){
        const biggest = this.List.reduce((prev, current) => {
            return(prev && prev.size > current.size) ? prev : current;
        });
        return biggest;
    }
}