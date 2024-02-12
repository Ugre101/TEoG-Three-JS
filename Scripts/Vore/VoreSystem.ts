import {Stat} from "../Character/Stats";

class VoreSettings {
    public enabled: boolean = false;
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
    public voreExp: number = 0;
    public voreLevel: number = 1;
    public vorePerks: string[] = [];
    public vorePerkPoints: number = 0;
    public voreStrengths: {
        digestionStrength: VoreStat;
        transformStrength: VoreStat;
    };
    constructor() {
        this.voreStrengths = {
            digestionStrength:  new VoreStat(1),
            transformStrength:  new VoreStat(1),
        };
    }

    gainVoreExp(exp: number) {
        this.voreExp += exp;
        if (this.voreExp >= this.voreLevel * 100) {
            this.voreExp -= this.voreLevel * 100;
            this.voreLevel++;
            this.vorePerkPoints++;
        }
    }
}
