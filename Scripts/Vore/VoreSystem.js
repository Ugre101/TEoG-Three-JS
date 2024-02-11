import {Stat} from "../Character/Stats.ts";

class VoreSettings {
    constructor() {
        this.enabled = false;
    }
    toggleVore() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

export const voreSettings = new VoreSettings();

class VoreStat extends Stat {
    constructor(baseValue = 0) {
        super(baseValue);
    }
}

export class VoreSystem {
    constructor() {
        this.voreExp = 0;
        this.voreLevel = 1;
        this.vorePerks = [];
        this.vorePerkPoints = 0;
        this.voreStrengths = {
            digestionStrength:  new VoreStat(1),
            transformStrength:  new VoreStat(1),
        };
    }



    /**
     * @param {number} exp
     */
    gainVoreExp(exp) {
        this.voreExp += exp;
        if (this.voreExp >= this.voreLevel * 100) {
            this.voreExp -= this.voreLevel * 100;
            this.voreLevel++;
            this.vorePerkPoints++;
        }
    }
}
