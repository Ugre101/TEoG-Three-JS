import { Character } from "../../Character/Character";
import { afterBattleManager } from "../AfterBattleManager";

export enum AfterActionType {
    Sex,
    Drain,
    Transform,
    Vore,
    Misc
}

export interface Requirement {
     Meets(caster: Character, target: Character) : boolean;
}



export const ReqNeedDick: {[key: string]: Requirement} = {
    Caster: {Meets(caster, target) {
        return caster.Dicks.has();
    },},
    Target: {Meets(caster, target) {
        return target.Dicks.has();
    },},
    Both: { Meets(caster, target) {
        return caster.Dicks.has() && target.Dicks.has();
    },}

}


export class AfterAction {
    public name: string;
    public description: string;
    public type: AfterActionType;
    public reqs : Requirement[] = [];
    constructor(name: string, description: string, type: AfterActionType) {
        this.name = name;
        this.description = description;
        this.type = type;
    }
    OnUse(caster: Character, target: Character) : string{
        console.log("Action used: " + this.name + " on " + target.firstName);
        return "";
    }
    OnContinueUse(caster: Character, target: Character) : string{
       return this.OnUse(caster, target);
    }
    canUse(caster: Character, target: Character) : boolean{
        if (this.reqs.length == 0)
            return true;
        return this.reqs.every((r) => r.Meets(caster,target));
    }
}

