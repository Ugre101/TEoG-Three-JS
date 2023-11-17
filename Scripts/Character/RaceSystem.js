import {StatMod, StatType} from "./Stats.js";

export class Race {
    static Humanoid = new Race("Humanoid", []);
    static Human = new Race("Human", [new StatMod(1, "Human", StatType.Con)]);
    static Orc = new Race("Orc", [new StatMod(1, "Orc", StatType.Str)]);
    static Fairy = new Race("Fairy", [new StatMod(1, "Fairy", StatType.Dex)]);

    constructor(name, mods) {
        this.name = name;
        this.mods = mods;
    }
}

class RaceEssence {
    constructor(race, essence) {
        this.race = race;
        this.essence = essence;
    }
}

export class RaceSystem {
    constructor(startRace) {
        this.Races = [new RaceEssence(startRace, 100)];
    }

    get Race() {
        if (this.Races.length > 0) return this.Races[0].race;
        else return Race.Humanoid;
    }

    raceName(capitalized = true) {
        return capitalized ? this.Race.name : this.Race.name.toLowerCase();
    }

    addRace(race, essence) {
        let have = this.Races.find(re => re.race.name === race.name);
        console.log(have);
        if (have === undefined) this.Races.push(new RaceEssence(race, essence));
        else have.essence += essence;
        this.sortRaces();
    }

    removeRace(race, essAmount) {
        let index = this.Races.findIndex(re => re.race.name === race.name);
        if (index > -1) {
            if (this.Races[index].essence <= essAmount) {
                this.Races.splice(index, 1);
            } else {
                this.Races[index].essence -= essAmount;
            }
            this.sortRaces();
        }
    }

    sortRaces() {
        this.Races.sort((a, b) => {
            return b.essence - a.essence;
        });
    }
}
