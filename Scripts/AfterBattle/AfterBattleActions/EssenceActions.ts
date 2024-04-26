import { Character } from "../../Character/Character";
import { drainSelf } from "../../Character/Essence/Essence";
import { FutaDrain } from "../../Perk";
import { AfterAction, AfterActionType } from "./AfterAction";

class EssenceAction extends AfterAction{
    constructor(name: string, description: string) {
        super(name, description, AfterActionType.Drain);
    }
}

const drainMasc = new EssenceAction("Drain Masc", "Drains masculinuty from your partner");
drainMasc.canUse = (caster: Character, target: Character) => {
    if (target.Masc.essence > 0){
        return true;
    }
    if (target.Dicks.has() || target.Balls.has()){
        return true;
    }
    return false;
}
drainMasc.OnUse = (caster: Character, target: Character) => {
    let drained = caster.drainMasc(target);
    return `${caster.firstName} drained ${drained} masculinty essence from ${target.firstName}`;
}

const drainFem = new EssenceAction("Drain Fem", "Drains femininity from your partner");
drainFem.canUse = (caster: Character, target: Character) => {
    if (target.Femi.essence > 0){
        return true;
    }
    if (target.Boobs.has() || target.Vaginas.has()){
        return true;
    }
    return false;
}
drainFem.OnUse = (caster: Character, target: Character) => {
    let drained = caster.drainFemi(target);
    return `${caster.firstName} drained ${drained} femininity essence from ${target.firstName}`;
}

const drainBoth = new EssenceAction("Drain Both", "Drains both masculinity and femininity from your partner");
drainBoth.canUse = (caster: Character, target: Character) => {
    if (caster.LevelSystem.perks.includes(FutaDrain.stringId) == false){
        return false;
    }
    if (target.Masc.essence > 0 && target.Femi.essence > 0){
        return true;
    }
    if (target.Dicks.has() || target.Balls.has() || target.Boobs.has() || target.Vaginas.has()){
        return true;
    }
    return false;
}
drainBoth.OnUse = (caster: Character, target: Character) => {
    let drainedMasc = caster.drainMasc(target);
    let drainedFem = caster.drainFemi(target);
    if (drainedMasc > 0 && drainedFem > 0){
        return `${caster.firstName} drained ${drainedMasc} masculinity essence and ${drainedFem} femininity essence from ${target.firstName}`;
    }else if (drainedMasc > 0){
        return `${caster.firstName} drained ${drainedMasc} masculinity essence from ${target.firstName}`;
    } else if (drainedFem > 0){
        return `${caster.firstName} drained ${drainedFem} femininity essence from ${target.firstName}`;
    }
    return "Nothing to drain";
}

const giveMasc = new EssenceAction("Give Masc", "Gives masculinity to your partner");
giveMasc.canUse = (caster: Character, target: Character) => {
    if (caster.EssenceGive.value <= 0){
        return false;
    }
    if (caster.Masc.essence > 0){
        return true;
    }
    if (drainSelf.IsOn){
        if (caster.Dicks.has() || caster.Balls.has()){
            return true;
        }   
    }
    return false;
}
giveMasc.OnUse = (caster: Character, target: Character) => {
    let given = caster.giveMasc(target);
    return `${caster.firstName} gave ${given} masculinity essence to ${target.firstName}`;
}

const giveFem = new EssenceAction("Give Fem", "Gives femininity to your partner");
giveFem.canUse = (caster: Character, target: Character) => {
    if (caster.EssenceGive.value <= 0){
        return false;
    }
    if (caster.Femi.essence > 0){
        return true;
    }
    if (drainSelf.IsOn){
        if (caster.Boobs.has() || caster.Vaginas.has()){
            return true;
        }   
    }
    return false;
}
giveFem.OnUse = (caster: Character, target: Character) => {
    let given = caster.giveFemi(target);
    return `${caster.firstName} gave ${given} femininity essence to ${target.firstName}`;
}


export const EssenceActions: EssenceAction[] = [drainMasc, drainFem, drainBoth, giveMasc, giveFem];

