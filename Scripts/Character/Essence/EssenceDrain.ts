import { Mod } from "../Stats";

export class EssenceDrain {
    private _dirty: boolean = true;
    private _value: number = 0;
    private baseDrain: number;
    public drainMods: Mod[] = [];
    constructor(baseDrain: number) {
        this.baseDrain = baseDrain;
    }


    get baseValue() {
        return this.baseDrain;
    }
    set baseValue(value: number) {
        this.baseDrain = value;
        this._dirty = true;
    }

    get value() {
        if (this._dirty) {
            this._value = this.drainAmount();
            this._dirty = false;
        }
        return this._value;
    }

    private drainAmount() {
        let drain = this.baseDrain;
        for (let mod of this.drainMods) {
            drain += mod.value;
        }
        return drain;
    }

    addDrainMod(mod: Mod) {
        this.drainMods.push(mod);
        this._dirty = true;
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
