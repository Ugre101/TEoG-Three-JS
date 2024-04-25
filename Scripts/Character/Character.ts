import {Race, RaceSystem} from "./RaceSystem.js";
import {Dicks} from "./SexualOrgans/Dicks.ts";
import {Boobs} from "./SexualOrgans/Boobs.ts";
import {Stat, Stats} from "./Stats.ts";
import {EssenceDrain} from "./Essence/EssenceDrain.js";
import {BodyStats} from "./Body/Body.ts";
import {LevelSystem} from "./LevelSystem.js";
import { Perk } from "../Perk.js";
import { Age } from "./Age.js";
import { Essence, drainSelf } from "./Essence/Essence.js";
import { Health } from "./Health.js";
import { VoreSystem } from "../Vore/VoreSystem.js";
import { BattleAction } from "../Battle/BattleActions/BattleAction.ts";
import { SexStats } from "./SexStats.ts";
import { Vaginas } from "./SexualOrgans/Vaginas.ts";
import { Balls } from "./SexualOrgans/Balls.ts";
import { OrganType } from "./SexualOrgans/OrganType.ts";
import { Stomach } from "../Vore/VoreOrgans/VoreOrgan.ts";

export class Character {
    public firstName: string;
    public lastName: string;
    public Age: Age;
    public Health: Health;
    public WillPower: Health;
    public Dicks: Dicks = new Dicks();
    public Balls: Balls = new Balls();
    public Boobs: Boobs = new Boobs();
    public Vaginas: Vaginas = new Vaginas();
    public LevelSystem: LevelSystem = new LevelSystem();
    public Masc: Essence;
    public Femi: Essence;
    public StableEssence: Stat;
    public EssenceDrain: EssenceDrain;
    public EssenceGive: EssenceDrain;
    public Stats: Stats = new Stats();
    public RaceSystem: RaceSystem;
    public BodyStats: BodyStats;
    public SexStats: SexStats = new SexStats();
    public VoreSystem: VoreSystem = new VoreSystem();
    public KnownBattleActions: number[] = [0,1,2];
    public Stomach: Stomach;
    
    constructor(startRace: Race) {
        this.firstName = "Steve";
        this.lastName = "Testsson";
        this.Age = new Age(18);
        this.Health = new Health(100);
        this.WillPower = new Health(100);
        this.Masc = new Essence(0);
        this.Femi = new Essence(0);
        this.StableEssence = new Stat(30);
        this.EssenceDrain = new EssenceDrain(30);
        this.EssenceGive = new EssenceDrain(0);
        this.RaceSystem = new RaceSystem(startRace);
        this.BodyStats = new BodyStats(20, 30, 160);
        this.Stomach = new Stomach();
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    Tick(ticks: number) {
        this.Dicks.tick(ticks);
        this.Balls.tick(ticks);
        this.Boobs.tick(ticks);
        this.Vaginas.tick(ticks);
        this.Stomach.tickPreys(ticks, this.VoreSystem.voreStrengths);
        this.Dicks.Vore.tickPreys(ticks, this.VoreSystem.voreStrengths);
        this.Balls.Vore.tickPreys(ticks, this.VoreSystem.voreStrengths);
        this.Boobs.Vore.tickPreys(ticks, this.VoreSystem.voreStrengths);
        this.Vaginas.Vore.tickPreys(ticks, this.VoreSystem.voreStrengths);
    }

    drainMasc(from: Character): number {
        let drain = this.EssenceDrain.value;
        let drainAmount = Math.min(drain, from.Masc.essence);
        if (drainAmount < drain) {
            let dAmount = from.Dicks.List.reduce((a, b) => a + b.Value(), 0);
        }
        from.Masc.essence -= drainAmount;
        this.Masc.essence += drainAmount;
        return drainAmount;
    }

    drainFemi(from: Character): number {
        let drain = this.EssenceDrain.value;
        let drainAmount = Math.min(drain, from.Femi.essence);
        if (drainAmount < drain) {
            let dAmount = from.Boobs.List.reduce((a, b) => a + b.Value(), 0);
        }
        from.Femi.essence -= drainAmount;
        this.Femi.essence += drainAmount;
        return drainAmount;
    }

    giveMasc(to: Character) : void {
        if (this.EssenceGive.value <= 0) {
            return;
        }
        let give = this.EssenceGive.value;
        let giveAmount = Math.min(give, this.Masc.essence);
        this.Masc.essence -= giveAmount;
        if (drainSelf.IsOn && giveAmount < give) {
            let dAmount = this.Dicks.List.reduce((a, b) => a + b.Value(), 0);

        }
        to.Masc.essence += giveAmount;
    }

    giveFemi(to: Character) : void {
        if (this.EssenceGive.value <= 0) {
            return;
        }
        let give = this.EssenceGive.value;
        let giveAmount = Math.min(give, this.Femi.essence);
        this.Femi.essence -= giveAmount;
        if (drainSelf.IsOn && giveAmount < give) {
            let dAmount = this.Boobs.List.reduce((a, b) => a + b.Value(), 0);
        }
        to.Femi.essence += giveAmount;
    }

    canGainPerk(perk: Perk): boolean {
        if (this.LevelSystem.perks.includes(perk.stringId)) {
            return false;
        }
        for (let req of perk.requisites) {
            if (!this.LevelSystem.perks.includes(req.stringId)) {
                return false;
            }
        }
        for (let exclusive of perk.exclusives) {
            if (this.LevelSystem.perks.includes(exclusive.stringId)) {
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
        this.LevelSystem.perks.push(perk.stringId);
        perk.onGain(this);
        return true;
    }

    getOrganOfType(type: OrganType){
        switch(type){
            case OrganType.Balls:
                return this.Balls;
            case OrganType.Boobs:
                return this.Boobs;
            case OrganType.Dick:
                return this.Dicks;
            case OrganType.Vagina:
                return this.Vaginas;
        }
    }

    gainMasc(amount: number) : boolean {
        this.Masc.gainEssence(amount);
        let tryGrow = true;
        let passes = 0;
        while(tryGrow){
            if (this.Masc.essence <= this.StableEssence.Value()){
                return passes > 0;
            }
            let dickTot = this.Dicks.getTotalSize() * 1.25;
            let ballTot = this.Balls.getTotalSize();
            if (dickTot <= ballTot){
                if (this.Dicks.has() && this.Masc.trySpendEssence(this.Dicks.growSmallestCost())){
                    this.Dicks.growSmallest();
                }else if (this.Masc.trySpendEssence(this.Dicks.growNewCost())){
                    this.Dicks.addDick();
                }else {
                    tryGrow = false;
                }
            } else {
                if (this.Balls.has() && this.Masc.trySpendEssence(this.Balls.growSmallestCost())){
                    this.Balls.growSmallest();
                }else if (this.Masc.trySpendEssence(this.Balls.growNewCost())){
                    this.Balls.addBall();
                }else {
                    tryGrow = false;
                }
            }
            passes++;
        }
        return passes > 1;
    }

    gainFemi(amount: number) : boolean {
        this.Femi.gainEssence(amount);
        let tryGrow = true;
        let passes = 0;
        while(tryGrow){
            if (this.Femi.essence <= this.StableEssence.Value()){
                return passes > 0;
            }
            let boobTot = this.Boobs.getTotalSize() * 1.25;
            let vaginaTot = this.Vaginas.getTotalSize();
            if (boobTot <= vaginaTot){
                if (this.Boobs.has() && this.Femi.trySpendEssence(this.Boobs.growSmallestCost())){
                    this.Boobs.growSmallest();
                }else if (this.Femi.trySpendEssence(this.Boobs.growNewCost())){
                    this.Boobs.addBoob();
                }else {
                    tryGrow = false;
                }
            } else {
                if (this.Vaginas.has() && this.Femi.trySpendEssence(this.Vaginas.growSmallestCost())){
                    this.Vaginas.growSmallest();
                }else if (this.Femi.trySpendEssence(this.Vaginas.growNewCost())){
                    this.Vaginas.addPussy();
                }else {
                    tryGrow = false;
                }
            }
            passes++;
        }
        return passes > 1;
    }
}

