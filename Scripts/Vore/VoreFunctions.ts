import { Character } from "../Character/Character";
import { OrganType } from "../Character/SexualOrgans/OrganType";

export function StomachVoreMaxCapacity(pred: Character) : number {
    let exp = pred.Stomach.voreExp;
    let height = pred.BodyStats.height.value;
    let flat = pred.VoreSystem.voreStrengths.capacityFlatBonus.Value();
    let mult = pred.VoreSystem.voreStrengths.capacityMultiplier.Value();

    return (Math.pow(exp, 0.5) * Math.pow(height, 0.5)) * mult + flat;
} 

export function StomachVoreCapacity(pred: Character) : number {
    return StomachVoreCapacity(pred) - pred.Stomach.totalPreyWeight();
}

export function CockVoreCapacity(pred: Character) : number {
    let size = pred.Balls.getTotalSize();
    let flat = pred.VoreSystem.voreStrengths.capacityFlatBonus.Value();
    let mult = pred.VoreSystem.voreStrengths.capacityMultiplier.Value();
    return (Math.pow(size, 0.5)) * mult + flat;
}