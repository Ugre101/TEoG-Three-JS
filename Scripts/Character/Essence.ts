export class Essence {
    public essence: number;
    constructor(startingEssence: number) {
        this.essence = startingEssence;
    }

    spendEssence(essenceCost: number): boolean {
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
