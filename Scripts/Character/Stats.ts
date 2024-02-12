
export enum ModType {
    Flat = "Flat",
    Percent = "Percent",
};

export enum StatType {
    Str = "Strength",
    Dex = "Dexterity",
    Con = "Constitution",
    Int = "Intelligence",
    Wis = "Wisdom",
    Cha = "Charisma",
}

export class Mod {
    value: number;
    from: string;
    type: ModType;

    constructor(value = 1, from: string, type = ModType.Flat) {
        this.value = value;
        this.from = from;
        this.type = type;
    }
}

export class StatMod extends Mod {
    stat: StatType;
    constructor(value: number = 1, from: string, statType: StatType) {
        super(value, from);
        this.stat = statType;
    }
}

export class Stat {
    private _lastValue: number;
    private _dirty: boolean = true;
    public baseValue: number;
    public mods: Mod[] = [];

    constructor(value: number = 5) {
        this.baseValue = value;
    }

    Value() : number {
        if (this._dirty) {
            this._lastValue = this.baseValue;
            let flatMods = this.mods.filter(mod => mod.type === ModType.Flat);
            this._lastValue += flatMods.reduce((acc, mod) => acc + mod.value, 0);
            let percentMods = this.mods.filter(mod => mod.type === ModType.Percent);
            this._lastValue *= 1 + percentMods.reduce((acc, mod) => acc + (this.baseValue * mod.value) / 100, 0);
            this._dirty = false;
        }
        return this._lastValue;
    }

    increase(value: number = 1) {
        this.baseValue += value;
        this._dirty = true;
    }

    decrease(value: number) {
        this.baseValue -= value;
        this._dirty = true;
    }

    addMod(mod: Mod) {
        if (mod instanceof Mod) {
            this.mods.push(mod);
            this._dirty = true;
        } else console.error("Not a mod");
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


export class Stats {
    str: Stat;
    dex: Stat;
    con: Stat;
    int: Stat;
    wis: Stat;
    cha: Stat;

    constructor(str = 5, dex = 5, con = 5, int = 5, wis = 5, cha = 5) {
        this.str = new Stat(str);
        this.dex = new Stat(dex);
        this.con = new Stat(con);
        this.int = new Stat(int);
        this.wis = new Stat(wis);
        this.cha = new Stat(cha);
    }

    getStatByType(statType: StatType): Stat {
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

    addStatMod(mod: Mod) {
        if (mod instanceof StatMod) {
            this.getStatByType(mod.stat).addMod(mod);
        } else {
            console.error("Not a stat mod");
        }
    }
}
