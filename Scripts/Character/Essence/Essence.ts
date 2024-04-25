import { ToogleOption } from "../../ToogleOptions";

export class Essence {
    public essence: number;
    constructor(startingEssence: number) {
        this.essence = startingEssence;
    }

    trySpendEssence(essenceCost: number): boolean {
        if (this.essence < essenceCost) {
            return false;
        }
        this.essence -= essenceCost;
        return true;
    }

    gainEssence(essenceGain: number) {
        this.essence += essenceGain;
    }
}

export const drainSelf = new ToogleOption();