import { Mod } from "./Stats";

export class EssenceDrain {
    public baseDrain: number;
    public drainMods: Mod[] = [];
    constructor(baseDrain: number) {
        this.baseDrain = baseDrain;
    }

    drainAmount() {
        let drain = this.baseDrain;
        for (let mod of this.drainMods) {
            drain += mod.value;
        }
        return drain;
    }

    addDrainMod(mod: Mod) {
        this.drainMods.push(mod);
    }

    removeDrainMod(from: string) {
        for (let mod of this.drainMods) {
            if (mod.from === from) {
                this.drainMods.splice(this.drainMods.indexOf(mod), 1);
                return true;
            }
        }
        return false;
    }
}
