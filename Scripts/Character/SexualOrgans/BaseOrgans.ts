import { BaseOrgan } from "./BaseOrgan";
import { SexualFluid,SexualFluids } from "./SexualFluids/SexualFluid";


export class BaseOrgans {
    List: BaseOrgan[] = [];
    Fluid: SexualFluid;
    constructor(sexualFluid: SexualFluids) {
        this.Fluid = new SexualFluid(sexualFluid);
    }
    tick(ticks: number) {
        this.Fluid.tick(ticks);
    }
    has() : boolean {
        return this.List.length > 0;
    }
    remove(index: number): boolean {
        if (this.List.length > index) {
            this.List.splice(index, 1);
            return true;
        }
        return false;
    }
    removeSmallest() {
        let indexSmallest = -1;
        for (let i = 0; i < this.List.length; i++) {
            if (indexSmallest === -1 || this.List[i].Value() < this.List[indexSmallest].Value()) {
                indexSmallest = i;
            }
        }
        if (indexSmallest > -1) {
            this.List.splice(indexSmallest, 1);
        }
    }
    getBiggest() {
        return this.List.reduce((prev, current) => {
            return (prev && prev.Value() > current.Value()) ? prev : current;
        });
    }
    getTotalSize() {
        return this.List.reduce((prev, current) => {
            return prev + current.Value();
        }, 0);
    }
    getFuidPercent() {
        return this.Fluid.amount / this.Fluid.maxAmount;
    }
    releaseFluid(percent: number) {
        return this.Fluid.release(percent) * this.getTotalSize();
    }
}

