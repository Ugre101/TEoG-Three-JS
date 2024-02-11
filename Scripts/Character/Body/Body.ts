import {ModType, Mod} from "../Stats.ts";


class BodyStat {
    private _value: number;
    private _dirty: boolean;
    public baseValue: number;
    public mods: Mod[] = [];

    constructor(baseValue: number) {
        this.baseValue = baseValue;
    }

    get value(){
        if(this._dirty){
            let flatMods = this.mods.filter(mod => mod.type === ModType.Flat);
            this._value = this.baseValue + flatMods.reduce((acc, mod) => acc + mod.value, 0);
            let percentMods = this.mods.filter(mod => mod.type === ModType.Percent);
            this._value *= 1 + percentMods.reduce((acc, mod) => acc + (this.baseValue * mod.value) / 100, 0);
            this._dirty = false;
        }
        return this._value;
    }

    addMod(mod: Mod){
        this.mods.push(mod);
        this._dirty = true;
    }

    removeMod(from: string): boolean {
        for (let mod of this.mods) {
            if (mod.from === from) {
                this.mods.splice(this.mods.indexOf(mod), 1);
                this._dirty = true;
                return true;
            }
        }
        return false;
    }

}

export class BodyStats {
    muscle: BodyStat;
    fat: BodyStat;
    height: BodyStat;
    constructor(muscle: number, fat: number, height: number) {
        this.muscle = new BodyStat(muscle);
        this.fat = new BodyStat(fat);
        this.height = new BodyStat(height);
    }
    get muscleWeight() {
        return this.height.value * (this.muscle.value / 200);
    }
    get fatWeight() {
        return this.height.value * (this.fat.value / 200);
    }
    get weight() {
        return this.muscleWeight + this.fatWeight + this.height.value * 0.2;
    }
    burnFat(intensity) {}
    buildMuscle(intensity) {}
    gainFat(kcal) {}
}
