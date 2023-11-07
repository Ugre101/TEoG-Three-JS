import {Race, RaceSystem} from "./RaceSystem";
import {Dicks} from "./SexualOrgans/Dicks";
import {Boobs} from "./SexualOrgans/Boobs";
import {Stat, Stats} from "./Stats";
import {EssenceDrain} from "./EssenceDrain";
import {BodyStats} from "./Body/Body";

class Age {
    constructor(age) {
        this.daysOld = age * 365;
    }
    get age() {
        return Math.floor(this.daysOld / 365);
    }
    /// Returns true if the age has changed
    tickDay(days = 1) {
        let was = this.age;
        this.daysOld += days;
        return this.age > was;
    }
    get yearsOld() {
        return Math.floor(this.daysOld / 365);
    }
    isAdult() {
        return this.age >= 18;
    }
    isTeenager() {
        return this.age >= 13 && this.age < 18;
    }
    isChild() {
        return this.age < 13;
    }
}

class Essence {
    constructor(startingEssence) {
        this.essence = startingEssence;
    }
    spendEssence(essenceCost) {
        if (this.essence < essenceCost) {
            return false;
        }
        this.essence -= essenceCost;
        return true;
    }
    gainEssence(essenceGain) {
        this.essence += essenceGain;
    }
}

class Health {
    constructor(maxHealth) {
        this.max = maxHealth;
        this.current = maxHealth;
    }
    damage(damageAmount) {
        this.current -= damageAmount;
    }
    heal(healAmount) {
        this.current += healAmount;
    }
    isAlive() {
        return this.current > 0;
    }
    restore() {
        this.current = this.max;
    }
}

class LevelSystem {
    constructor() {
        this.level = 1;
        this.exp = 0;
        this.statPoints = 0;
        this.perkPoints = 0;
    }
    neededExp() {
        return 100 * this.level;
    }
    gainExp(exp) {
        this.exp += exp;
        while (this.exp >= this.neededExp()) {
            this.exp -= this.neededExp();
            this.levelUp();
        }
    }
    levelUp() {
        this.level++;
        this.statPoints += 5;
        this.perkPoints += 1;
    }
    useStatPoint() {
        if (this.statPoints > 0) {
            this.statPoints--;
            return true;
        }
        return false;
    }
    usePerkPoint(cost = 1) {
        if (this.perkPoints >= cost) {
            this.perkPoints -= cost;
            return true;
        }
        return false;
    }
}

export class Character {
    constructor(startRace) {
        this.firstName = "Steve";
        this.lastName = "Testsson";
        this.Age = new Age(18);
        this.Health = new Health(100);
        this.Dicks = new Dicks();
        this.Boobs = new Boobs();
        this.LevelSystem = new LevelSystem();
        this.Masc = new Essence(0);
        this.Femi = new Essence(0);
        this.StableEssence = new Stat(30);
        this.EssenceDrain = new EssenceDrain(30);
        this.Stats = new Stats();
        this.RaceSystem = new RaceSystem(startRace);
        this.BodyStats = new BodyStats(20, 30, 160);
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     *
     * @param {Character} from
     * @returns {number} The amount of essence drained
     */
    drainMasc(from) {
        let drain = this.EssenceDrain.drainAmount();
        let drainAmount = Math.min(drain, from.Masc.essence);
        if (drainAmount < drain) {
            let dAmount = from.Dicks.List.reduce((a, b) => a + b.size, 0);
        }
        from.Masc.essence -= drainAmount;
        this.Masc.essence += drainAmount;
        return drainAmount;
    }
}

export let Player = new Character(Race.Human);
export function LoadPlayer(newPlayer) {
    Player = newPlayer;
}
