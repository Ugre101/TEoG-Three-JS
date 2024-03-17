import { Character } from "../Character/Character";

export function StomachVoreCapacity(pred: Character) : number {
    let exp = pred.Stomach.voreExp;
    let height = pred.BodyStats.height.value;
    let flat = pred.VoreSystem.voreStrengths.capacityFlatBonus.Value();
    let mult = pred.VoreSystem.voreStrengths.capacityMultiplier.Value();

    return (Math.pow(exp, 0.5) * Math.pow(height, 0.5)) * mult + flat;
}