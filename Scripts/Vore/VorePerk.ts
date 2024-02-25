import {Perk} from "../Perk";
import {Mod, ModType} from "../Character/Stats";
import { Character } from "../Character/Character";

export class VorePerk extends Perk{
    constructor(name: string, description: string, cost: number, type: string, 
        onGain: (char: Character) =>  void,requisites:Perk[] = [], exclusives:Perk[] = []) {
        super(name, description, cost, type, onGain);
    }
}

export const VorePerksDict = new Map<string, VorePerk>();

const BeginnerPred = new VorePerk("Beginner Predator", "You're a beginner predator.", 1, "Vore", character => {
    character.VoreSystem.voreStrengths.digestionStrength.mods.push(new Mod(10, "Beginner Predator", ModType.Percent));
});
VorePerksDict.set(BeginnerPred.stringId, BeginnerPred);

const TinyPred = new VorePerk("Tiny Predator", "You're a tiny predator.", 1, "Vore", character => {
    
});
VorePerksDict.set(TinyPred.stringId, TinyPred);

const GiantPred = new VorePerk("Giant Predator", "You're a giant predator.", 1, "Vore", character => {
    
});
VorePerksDict.set(GiantPred.stringId, GiantPred);

TinyPred.exclusives.push(GiantPred);
GiantPred.exclusives.push(TinyPred);

