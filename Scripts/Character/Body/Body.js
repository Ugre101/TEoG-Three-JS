import {ModType} from "../Stats.js";

/**
 * @class BodyStat
 * @property {number} baseValue
 * @property {Mod[]} mods
 */
class BodyStat{
    #_value;
    #_dirty;

    constructor(baseValue) {
        this.baseValue = baseValue;
        this.mods = [];
    }

    get value(){
        if(this.#_dirty){
            let flatMods = this.mods.filter(mod => mod.type === ModType.Flat);
            this.#_value = this.baseValue + flatMods.reduce((acc, mod) => acc + mod.value, 0);
            let percentMods = this.mods.filter(mod => mod.type === ModType.Percent);
            this.#_value *= 1 + percentMods.reduce((acc, mod) => acc + (this.baseValue * mod.value) / 100, 0);
            this.#_dirty = false;
        }
        return this.#_value;
    }

    /**
     * @param {Mod} mod
     */
    addMod(mod){
        this.mods.push(mod);
        this.#_dirty = true;
    }

    /**
     * @param {string} from
     * @returns {boolean} found and removed
     */
    removeMod(from) {
        for (let mod of this.mods) {
            if (mod.from === from) {
                this.mods.splice(this.mods.indexOf(mod), 1);
                this.#_dirty = true;
                return true;
            }
        }
        return false;
    }

}

export class BodyStats {
    constructor(muscle, fat, height) {
        this.muscle = new BodyStat(muscle);
        this.fat = new BodyStat(fat);
        this.height = new BodyStat(height);
    }
    get muscleWeight() {
        return this.height * (this.muscle / 200);
    }
    get fatWeight() {
        return this.height * (this.fat / 200);
    }
    get weight() {
        return this.muscleWeight + this.fatWeight + this.height * 0.2;
    }
    burnFat(intensity) {}
    buildMuscle(intensity) {}
    gainFat(kcal) {}
}
