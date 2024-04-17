import { Character } from "../../Character/Character";
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
    if (caster.Masc.essence > 0){
        return true;
    }
    if (caster.Dicks.has() || caster.Balls.has()){
        return true;
    }
    return false;
}

