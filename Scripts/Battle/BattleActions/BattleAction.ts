import { Character } from "../../Character/Character";

export enum ActionType {
    Attack,
    LustAttack,
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
    0: new BattleAction(0, "Hit", "A physical basic attack", ActionType.Attack),
    1: new BattleAction(1, "Tease", "Tease the enemy", ActionType.LustAttack),
    2: new BattleAction(2, "Flee", "Run away", ActionType.Misc),
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

ActionDictionary[1].OnUse = function(caster: Character, target: Character){
    console.log("Tease");
    let dmg = caster.Stats.cha.Value() * rng();
    target.Health.damage(dmg);
    console.log("Enemy health: " + target.Health.current);
}

ActionDictionary[2].OnUse = function(caster: Character, target: Character){
    console.log("Flee");
}