import {Mod, ModType, StatType} from "./Character/Stats.ts";
import { Character } from "./Character/Character.ts";
export class Perk {
    stringId: string;
    description: string;
    cost: number;
    type: string;
    onGain: (arg0: Character) => void;
    requisites: Perk[] = [];
    exclusives: Perk[] = [];

    constructor(name: string, description: string, cost: number, type: string, onGain: (arg0: Character) => void) {
        this.stringId = name;
        this.description = description;
        this.cost = cost;
        this.type = type;
        this.onGain = onGain;
    }

    get title () {
        return this.stringId.replace(/(?<!^)([A-Z])/g, ' $1');
    }
}

// Decided to add the perks outside of it's initialization to ensure that stringId is correct.
export const PerksDict = new Map;
const Sturdy = new Perk("Sturdy", "You're a sturdy person.", 1, "Stat", character => {
    character.Stats.getStatByType(StatType.Con).mods.push(new Mod(10, "Sturdy", ModType.Percent));
});
PerksDict.set(Sturdy.stringId, Sturdy);

const Strong = new Perk("Strong", "You're a strong person.", 1, "Stat", character => {
    character.Stats.getStatByType(StatType.Str).mods.push(new Mod(10, "Strong", ModType.Percent));
});
PerksDict.set(Strong.stringId, Strong);

const Smart = new Perk("Smart", "You're a smart person.", 1, "Stat", character => {
    character.Stats.getStatByType(StatType.Int).mods.push(new Mod(10, "Smart", ModType.Percent));
});
PerksDict.set(Smart.stringId, Smart);

const Agile = new Perk("Agile", "You're an agile person.", 1, "Stat", character => {
    character.Stats.getStatByType(StatType.Dex).mods.push(new Mod(10, "Agile", ModType.Percent));
});
PerksDict.set(Agile.stringId, Agile);

const Wise = new Perk("Wise", "You're a wise person.", 1, "Stat", character => {
    character.Stats.getStatByType(StatType.Wis).mods.push(new Mod(10, "Wise", ModType.Percent));
});
PerksDict.set(Wise.stringId, Wise);

const Charming = new Perk("Charming", "You're a charming person.", 1, "Stat", character => {
    character.Stats.getStatByType(StatType.Cha).mods.push(new Mod(10, "Charming", ModType.Percent));
});
PerksDict.set(Charming.stringId, Charming);

const Big = new Perk("Big", "You're a big person.", 1, "Stat", character => {
    character.BodyStats.height.mods.push(new Mod(10, "Big", ModType.Percent));
});
PerksDict.set(Big.stringId, Big);

const Tiny = new Perk("Tiny", "You're a tiny person.", 1, "Stat", character => {
    character.BodyStats.height.mods.push(new Mod(-10, "Tiny", ModType.Percent));
});
PerksDict.set(Tiny.stringId, Tiny);

const Muscular = new Perk("Muscular", "You're a muscular person.", 1, "Stat", character => {
    character.BodyStats.muscle.mods.push(new Mod(10, "Muscular", ModType.Percent));
});
PerksDict.set(Muscular.stringId, Muscular);

const Fat = new Perk("Fat", "You're a fat person.", 1, "Stat", character => {
    character.BodyStats.fat.mods.push(new Mod(10, "Fat", ModType.Percent));
});
PerksDict.set(Fat.stringId, Fat);

const Skinny = new Perk("Skinny", "You're a skinny person.", 1, "Stat", character => {
    character.BodyStats.fat.mods.push(new Mod(-10, "Skinny", ModType.Percent));
});
PerksDict.set(Skinny.stringId, Skinny);

//Essence Perks
const EssenceFlow = new Perk("EssenceFlow", "You have a sense for the flow of essence.", 1, "Essence", character => {
    character.EssenceDrain.drainMods.push(new Mod(10, "Essence Flow", ModType.Flat));
    character.EssenceDrain.drainMods.push(new Mod(5, "Essence Flow", ModType.Percent));
});
PerksDict.set(EssenceFlow.stringId, EssenceFlow);

const EssenceHoarder = new Perk("EssenceHoarder", "You're a hoarder of essence.", 1, "Essence", character => {
    character.StableEssence.mods.push(new Mod(10, "Essence Hoarder", ModType.Flat));
    character.StableEssence.mods.push(new Mod(10, "Essence Hoarder", ModType.Percent));
});
PerksDict.set(EssenceHoarder.stringId, EssenceHoarder);

const EssenceThief = new Perk("EssenceThief", "You're a thief of essence.", 1, "Essence", character => {
    character.EssenceDrain.drainMods.push(new Mod(5, "Essence Flow", ModType.Flat));
    character.EssenceDrain.drainMods.push(new Mod(15, "Essence Flow", ModType.Percent));
});
PerksDict.set(EssenceThief.stringId, EssenceThief);

const MascDrain = new Perk("MascDrain", "You're a drainer of masc essence.", 1, "Essence", character => {
    character.EssenceDrain.drainMods.push(new Mod(10, "Masc Drain", ModType.Flat));
    character.EssenceDrain.drainMods.push(new Mod(5, "Masc Drain", ModType.Percent));
});
PerksDict.set(MascDrain.stringId, MascDrain);

const FemiDrain = new Perk("FemiDrain", "You're a drainer of fem essence.", 1, "Essence", character => {
    character.EssenceDrain.drainMods.push(new Mod(5, "Femi Drain", ModType.Flat));
    character.EssenceDrain.drainMods.push(new Mod(10, "Femi Drain", ModType.Percent));
});
PerksDict.set(FemiDrain.stringId, FemiDrain);

export const FutaDrain = new Perk("FutaDrain", "You're a drainer of futa essence.", 1, "Essence", character => {
    character.EssenceDrain.drainMods.push(new Mod(7.5, "Futa Drain", ModType.Flat));
    character.EssenceDrain.drainMods.push(new Mod(7.5, "Futa Drain", ModType.Percent));
});
PerksDict.set(FutaDrain.stringId, FutaDrain);

const FitnessFreak = new Perk("FitnessFreak", "You're a fitness freak.", 1, "Stat", character => {
    character.BodyStats.muscle.mods.push(new Mod(10, "Fitness Freak", ModType.Percent));
    character.BodyStats.fat.mods.push(new Mod(-10, "Fitness Freak", ModType.Percent));
});
FitnessFreak.requisites.push(Muscular);
FitnessFreak.requisites.push(Skinny);
PerksDict.set(FitnessFreak.stringId, FitnessFreak);

const Powerlifter = new Perk("Powerlifter", "You're a built like a powerlifter.", 1, "Stat", character => {
    character.BodyStats.muscle.mods.push(new Mod(15, "Powerlifter", ModType.Percent));
    character.BodyStats.fat.mods.push(new Mod(10, "Powerlifter", ModType.Percent));
});
Powerlifter.requisites.push(Muscular);
Powerlifter.requisites.push(Fat);
PerksDict.set(Powerlifter.stringId, Powerlifter);

// Essence
const GenderBending = new Perk("GenderBending", "", 2, "Essence", character => {

});
GenderBending.requisites.push(EssenceFlow);
PerksDict.set(GenderBending.stringId, GenderBending);




