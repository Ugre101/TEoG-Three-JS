
/**
 * @class LevelSystem
 * @description Class for handling the level system of a character
 * @property {number} level
 * @property {number} exp
 * @property {number} statPoints
 * @property {number} perkPoints
 * @property {string[]} perks
 */
export class LevelSystem {
    constructor() {
        this.level = 1;
        this.exp = 0;
        this.statPoints = 0;
        this.perkPoints = 0;
        this.perks = [];
    }

    neededExp() {
        return 100 * this.level;
    }

    gainExp(exp) {
        this.exp += exp;
        while (this.exp >= this.neededExp()) {
            this.exp -= this.neededExp();
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.statPoints += 5;
        this.perkPoints += 1;
    }

    useStatPoint() {
        if (this.statPoints > 0) {
            this.statPoints--;
            return true;
        }
        return false;
    }

    usePerkPoint(cost = 1) {
        if (this.perkPoints >= cost) {
            this.perkPoints -= cost;
            return true;
        }
        return false;
    }

    addPerk(perk) {
        this.perks.push(perk);
    }

}

