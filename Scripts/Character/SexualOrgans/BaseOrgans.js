import { BaseOrgan } from "./BaseOrgan";
import { SexualFluid,SexualFluids } from "./SexualFluids/SexualFluid";


export class BaseOrgans {
    /**
     * @param {SexualFluids} sexualFluid
     */
    constructor(sexualFluid) {
        /**
         * @property {BaseOrgan[]} List
         */
        this.List = [];
        this.Fluid = new SexualFluid(sexualFluid);
    }
   
    /**
     * @param {number} index
     * @returns {boolean} if an organ was removed
     */
    remove(index) {
        if (this.List.length > index) {
            this.List.splice(index, 1);
            return true;
        }
        return false;
    }
    removeSmallest() {
        let indexSmallest = -1;
        for (let i = 0; i < this.List.length; i++) {
            if (indexSmallest === -1 || this.List[i].size < this.List[indexSmallest].size) {
                indexSmallest = i;
            }
        }
        if (indexSmallest > -1) {
            this.List.splice(indexSmallest, 1);
        }
    }
    getBiggest() {
        return this.List.reduce((prev, current) => {
            return (prev && prev.size > current.size) ? prev : current;
        });
    }
    getTotalSize() {
        return this.List.reduce((prev, current) => {
            return prev + current.size;
        }, 0);
    }
    getFuidPercent() {
        return this.Fluid.amount / this.Fluid.maxAmount;
    }
    releaseFluid(percent) {
        return this.Fluid.release(percent) * this.getTotalSize();
    }
}
