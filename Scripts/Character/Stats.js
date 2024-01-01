/**
 * @enum {string}
 */
export const ModType = {
    Flat: "Flat",
    Percent: "Percent",
};


/**
 * @enum {string}
 */
export const StatType = {
    Str: "Strength",
    Dex: "Dexterity",
    Con: "Constitution",
    Int: "Intelligence",
    Wis: "Wisdom",
    Cha: "Charisma",
};


/**
 * @class Mod
 * @property {number} value
 * @property {string} from
 * @property {ModType} type
 */
export class Mod {
    constructor(value = 1, from, type = ModType.Flat) {
        this.value = value;
        this.from = from;
        this.type = type;
    }
}

export class StatMod extends Mod {
    /**
     *
     * @param {number} value
     * @param {string} from
     * @param {StatType} statType
     */
    constructor(value = 1, from, statType) {
        super(value, from);
        this.stat = statType;
    }
}

/**
 * @class Stat
 * @property {number} baseValue
 * @property {Mod[]} mods
 */
export class Stat {
    #_lastValue;
    #_dirty;
    constructor(value = 5) {
        this.baseValue = value;
        this.mods = [];
    }

    Value() {
        if (this.#_dirty) {
            this.#_lastValue = this.baseValue;
            let flatMods = this.mods.filter(mod => mod.type === ModType.Flat);
            this.#_lastValue += flatMods.reduce((acc, mod) => acc + mod.value, 0);
            let percentMods = this.mods.filter(mod => mod.type === ModType.Percent);
            this.#_lastValue *= 1 + percentMods.reduce((acc, mod) => acc + (this.baseValue * mod.value) / 100, 0);
            this.#_dirty = false;
        }
        return this.#_lastValue;
    }

    /**
     * @param {number} value
     */
    increase(value = 1) {
        this.baseValue += value;
        this.dirty = true;
    }

    /**
     * @param {number} value
     */
    decrease(value) {
        this.baseValue -= value;
        this.dirty = true;
    }

    /**
     * @param {Mod} mod
     */
    addMod(mod) {
        if (mod instanceof Mod) {
            this.mods.push(mod);
            this.dirty = true;
        } else console.error("Not a mod");
    }

    /**
     * @param {string} from
     * @returns {boolean}
     */
    removeMod(from) {
        for (let mod of this.mods) {
            if (mod.from === from) {
                this.mods.splice(this.mods.indexOf(mod), 1);
                this.dirty = true;
                return true;
            }
        }
        return false;
    }
}


export class Stats {
    constructor(str = 5, dex = 5, con = 5, int = 5, wis = 5, cha = 5) {
        this.str = new Stat(str);
        this.dex = new Stat(dex);
        this.con = new Stat(con);
        this.int = new Stat(int);
        this.wis = new Stat(wis);
        this.cha = new Stat(cha);
    }

    /**
     * @param {StatType} statType
     * @returns {Stat}
     */
    getStatByType(statType) {
        switch (statType) {
            case StatType.Str:
                return this.str;
            case StatType.Dex:
                return this.dex;
            case StatType.Con:
                return this.con;
            case StatType.Int:
                return this.int;
            case StatType.Wis:
                return this.wis;
            case StatType.Cha:
                return this.cha;
            default:
                throw console.error("Statty type not found");
        }
    }

    /**
     * @param {Mod} mod
     */
    addStatMod(mod) {
        if (mod instanceof StatMod) {
            this.getStatByType(mod.stat).addMod(mod);
        } else {
            console.error("Not a stat mod");
        }
    }
}
