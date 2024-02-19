import { Character } from "../../Character/Character";

export enum ActionType {
    Attack,
    Heal,
    Buff,
    Debuff,
    Misc
} 

export class BattleAction {
    public id : number;
    public name : string;
    public description : string;
    public type : ActionType;

    constructor(id: number, name: string, description: string, type: ActionType){
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }

    public OnUse(caster: Character, target: Character){
        console.log("Action used: " + this.name);
    }
}

export const ActionDictionary = {
    0: new BattleAction(0, "Basic Attack", "A basic attack", ActionType.Attack),
    1: new BattleAction(1, "Heal", "Heal an ally", ActionType.Heal),
    2: new BattleAction(2, "Buff", "Buff an ally", ActionType.Buff),
    3: new BattleAction(3, "Debuff", "Debuff an enemy", ActionType.Debuff)
}

function rng() {
    return Math.random() * (1.5 - 0.5) + 0.5;
}

ActionDictionary[0].OnUse = function(caster: Character, target: Character){
    console.log("Attack");
    let dmg = caster.Stats.str.Value() * rng();
    target.Health.damage(dmg);
    console.log("Enemy health: " + target.Health.current);
}
