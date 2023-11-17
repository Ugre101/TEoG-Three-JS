import { Mod } from "./Stats.js";

export class EssenceDrain {
    constructor(baseDrain) {
        this.baseDrain = baseDrain;
        this.drainMods = [];
    }

    drainAmount() {
        let drain = this.baseDrain;
        for (let mod of this.drainMods) {
            drain += mod.value;
        }
        return drain;
    }

    addDrainMod(mod) {
        if (mod instanceof Mod) {
            this.drainMods.push(mod);
        }
    }

    removeDrainMod(from) {
        for (let mod of this.drainMods) {
            if (mod.from === from) {
                this.drainMods.splice(this.drainMods.indexOf(mod), 1);
                return true;
            }
        }
        return false;
    }
}
