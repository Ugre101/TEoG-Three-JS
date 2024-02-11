import {Race, RaceSystem} from "./RaceSystem.js";
import {Dicks} from "./SexualOrgans/Dicks.ts";
import {Boobs} from "./SexualOrgans/Boobs.ts";
import {Stat, Stats} from "./Stats.ts";
import {EssenceDrain} from "./EssenceDrain.js";
import {BodyStats} from "./Body/Body.ts";
import {LevelSystem} from "./LevelSystem.js";
import { Perk } from "../Perk.js";
import { Age } from "./Age.js";
import { Essence } from "./Essence.js";
import { Health } from "./Health.js";

export class Character {
    public firstName: string;
    public lastName: string;
    public Age: Age;
    public Health: Health;
    public Dicks: Dicks;
    public Boobs: Boobs;
    public LevelSystem: LevelSystem = new LevelSystem();
    public Masc: Essence;
    public Femi: Essence;
    public StableEssence: Stat;
    public EssenceDrain: EssenceDrain;
    public Stats: Stats;
    public RaceSystem: RaceSystem;
    public BodyStats: BodyStats;
    
    constructor(startRace: Race) {
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

    drainMasc(from: Character): number {
        let drain = this.EssenceDrain.drainAmount();
        let drainAmount = Math.min(drain, from.Masc.essence);
        if (drainAmount < drain) {
            let dAmount = from.Dicks.List.reduce((a, b) => a + b.Value(), 0);
        }
        from.Masc.essence -= drainAmount;
        this.Masc.essence += drainAmount;
        return drainAmount;
    }

    canGainPerk(perk: Perk): boolean {
        if (this.LevelSystem.perks.includes(perk.name)) {
            return false;
        }
        for (let req of perk.requisites) {
            if (!this.LevelSystem.perks.includes(req)) {
                return false;
            }
        }
        for (let exclusive of perk.exclusives) {
            if (this.LevelSystem.perks.includes(exclusive)) {
                return false;
            }
        }
        return true;
    }

    tryGainPerk( perk: Perk): boolean {
        if(!this.canGainPerk(perk)){
            return false;
        }
        if (!this.LevelSystem.usePerkPoint(perk.cost)) {
            return false;
        }
        this.LevelSystem.perks.push(perk.name);
        perk.onGain(this);
        return true;
    }
}

