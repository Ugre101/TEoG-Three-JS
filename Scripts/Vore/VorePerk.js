import {Perk} from "../Perk.js";
import {Mod, ModType} from "../Character/Stats.js";

export class VorePerk extends Perk{
    constructor(name, description, cost, type, onGain,requisites = [], exclusives = []) {
        super(name, description, cost, type, onGain,requisites, exclusives);
    }
}

export const TierOneVorePerks = {
    BeginnerPred: new VorePerk("Beginner Predator", "You're a beginner predator.", 1, "Vore", character => {
        character.VoreSystem.voreStrengths.digestionStrength.mods.push(new Mod(10, "Beginner Predator", ModType.Percent));
    }),
    TinyPred: new VorePerk("Tiny Predator", "You're a tiny predator.", 1, "Vore", character => {
    },[]),
    GiantPred: new VorePerk("Giant Predator", "You're a giant predator.", 1, "Vore", character => {

    },[],["TinyPred"]),
};

