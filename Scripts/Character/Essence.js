/**
 * @class Essence
 * @property {number} essence
 
 */
export class Essence {
    /**
     * @param {number} startingEssence 
     */
    constructor(startingEssence) {
        this.essence = startingEssence;
    }

    /**
     * 
     * @param {number} essenceCost 
     * @returns {boolean} true if the character has enough essence to spend
     */
    spendEssence(essenceCost) {
        if (this.essence < essenceCost) {
            return false;
        }
        this.essence -= essenceCost;
        return true;
    }
    /**
     * @param {number} essenceGain 
     */
    gainEssence(essenceGain) {
        this.essence += essenceGain;
    }
}
