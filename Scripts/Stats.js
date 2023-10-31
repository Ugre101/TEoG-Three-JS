export class Mod {
    constructor(value = 1, from) {
        this.value = value;
        this.from = from;
    }
}

export class StatMod extends Mod {
    constructor(value = 1, from, statType) {
        super(value, from);
        if (statType instanceof StatType) this.stat = statType;
        else console.error("Not a stat type");
    }
}
export class Stat {
    constructor(value = 5) {
        this.baseValue = value;
        this.mods = [];
        this.dirty = true;
        this.lastValue = 0;
    }

    Value() {
        if (this.dirty) {
            this.lastValue = this.baseValue;
            for (let mod of this.mods) {
                this.lastValue += mod.value;
            }
            this.dirty = false;
        }
        return this.lastValue;
    }

    increase(value = 1) {
        this.baseValue += value;
        this.dirty = true;
    }
    decrease(value) {
        this.baseValue -= value;
        this.dirty = true;
    }
    addMod(mod) {
        if (mod instanceof Mod) {
            this.mods.push(mod);
            this.dirty = true;
        } else console.error("Not a mod");
    }
    removeMod(from) {
        for (let mod of this.mods) {
            if (mod.from == from) {
                this.mods.splice(this.mods.indexOf(mod), 1);
                this.dirty = true;
                return true;
            }
        }
        return false;
    }
}

export class StatType {
    static Str = new StatType("Strength");
    static Dex = new StatType("Dexterity");
    static Con = new StatType("Constitution");
    static Int = new StatType("Intelligence");
    static Wis = new StatType("Wisdom");
    static Cha = new StatType("Charisma");

    constructor(name) {
        this.name = name;
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
        }
    }

    addStatMod(mod) {
        if (mod instanceof StatMod == false) {
            console.error("Not a stat mod");
            return;
        }
        this.getStatByType(mod.stat).addMod(mod);
    }
}
