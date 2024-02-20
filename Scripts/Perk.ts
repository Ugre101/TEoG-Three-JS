import {Mod, ModType, StatType} from "./Character/Stats.ts";
import { Character } from "./Character/Character.ts";
export class Perk {
    name: string;
    description: string;
    cost: number;
    type: string;
    onGain: (arg0: Character) => void;
    requisites: Perk[] = [];
    exclusives: Perk[] = [];

    constructor(name: string, description: string, cost: number, type: string, onGain: (arg0: Character) => void) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.type = type;
        this.onGain = onGain;
    }

    get title () {
        return this.name.replace(/(?<!^)([A-Z])/g, ' $1');
    }
}

export const TierOnePerks = {
    Sturdy: new Perk("Sturdy", "You're a sturdy person.", 1, "Stat", character => {
        character.Stats.getStatByType(StatType.Con).mods.push(new Mod(10, "Sturdy", ModType.Percent));
    }),
    Strong: new Perk("Strong", "You're a strong person.", 1, "Stat", character => {
        character.Stats.getStatByType(StatType.Str).mods.push(new Mod(10, "Strong", ModType.Percent));
    }),
    Smart: new Perk("Smart", "You're a smart person.", 1, "Stat", character => {
        character.Stats.getStatByType(StatType.Int).mods.push(new Mod(10, "Smart", ModType.Percent));
    }),
    Agile: new Perk("Agile", "You're an agile person.", 1, "Stat", character => {
        character.Stats.getStatByType(StatType.Dex).mods.push(new Mod(10, "Agile", ModType.Percent));
    }),
    Wise: new Perk("Wise", "You're a wise person.", 1, "Stat", character => {
        character.Stats.getStatByType(StatType.Wis).mods.push(new Mod(10, "Wise", ModType.Percent));
    }),
    Charming: new Perk("Charming", "You're a charming person.", 1, "Stat", character => {
        character.Stats.getStatByType(StatType.Cha).mods.push(new Mod(10, "Charming", ModType.Percent));
    }),

    Big: new Perk("Big", "You're a big person.", 1, "Stat", character => {
        character.BodyStats.height.mods.push(new Mod(10, "Big", ModType.Percent));
    }),
    Tiny: new Perk("Tiny", "You're a tiny person.", 1, "Stat", character => {
        character.BodyStats.height.mods.push(new Mod(-10, "Tiny", ModType.Percent));
    }),

    Muscular: new Perk("Muscular", "You're a muscular person.", 1, "Stat", character => {
        character.BodyStats.muscle.mods.push(new Mod(10, "Muscular", ModType.Percent));
    }),
    Fat: new Perk("Fat", "You're a fat person.", 1, "Stat", character => {
        character.BodyStats.fat.mods.push(new Mod(10, "Fat", ModType.Percent));
    }),
    Skinny: new Perk("Skinny", "You're a skinny person.", 1, "Stat", character => {
        character.BodyStats.fat.mods.push(new Mod(-10, "Skinny", ModType.Percent));
    }),

    //Essence Perks
    EssenceFlow: new Perk("EssenceFlow", "You have a sense for the flow of essence.", 1, "Essence", character => {
        character.EssenceDrain.drainMods.push(new Mod(10, "Essence Flow", ModType.Flat));
        character.EssenceDrain.drainMods.push(new Mod(5, "Essence Flow", ModType.Percent));
    }),
    EssenceHoarder: new Perk("EssenceHoarder", "You're a hoarder of essence.", 1, "Essence", character => {
        character.StableEssence.mods.push(new Mod(10, "Essence Hoarder", ModType.Flat));
        character.StableEssence.mods.push(new Mod(10, "Essence Hoarder", ModType.Percent));
    }),
    EssenceThief: new Perk("EssenceThief", "You're a thief of essence.", 1, "Essence", character => {
        character.EssenceDrain.drainMods.push(new Mod(5, "Essence Flow", ModType.Flat));
        character.EssenceDrain.drainMods.push(new Mod(15, "Essence Flow", ModType.Percent));
    }),
};

export const TierTwoPerks = {
    FitnessFreak: new Perk("FitnessFreak", "You're a fitness freak.", 1, "Stat", character => {
        character.BodyStats.muscle.mods.push(new Mod(10, "Fitness Freak", ModType.Percent));
        character.BodyStats.fat.mods.push(new Mod(-10, "Fitness Freak", ModType.Percent));
    }),
    Powerlifter: new Perk("Powerlifter", "You're a built like a powerlifter.", 1, "Stat", character => {
        character.BodyStats.muscle.mods.push(new Mod(15, "Powerlifter", ModType.Percent));
        character.BodyStats.fat.mods.push(new Mod(10, "Powerlifter", ModType.Percent));
    }),

    // Essence
    GenderBending: new Perk("GenderBending", "", 2, "Essence", character => {

    }),
};
TierTwoPerks.FitnessFreak.requisites.push(TierOnePerks.Muscular);
TierTwoPerks.FitnessFreak.requisites.push(TierOnePerks.Skinny);

TierTwoPerks.Powerlifter.requisites.push(TierOnePerks.Muscular);
TierTwoPerks.Powerlifter.requisites.push(TierOnePerks.Fat);

TierTwoPerks.GenderBending.requisites.push(TierOnePerks.EssenceFlow);
