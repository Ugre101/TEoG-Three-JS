import { Character } from "../../Character/Character";
import { leaveCombat } from "../BattleManager";

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

    public OnUse(caster: Character, target: Character) : string {
        console.log("Action used: " + this.name);
        return "Action used: " + this.name;
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
    let dmg = caster.Stats.str.Value() * 5 * rng();
    target.Health.damage(dmg);
    return "You hit the enemy for " + dmg + " damage";
}

ActionDictionary[1].OnUse = function(caster: Character, target: Character){
    console.log("Tease");
    let dmg = caster.Stats.cha.Value() * 5 * rng();
    target.Health.damage(dmg);
    return "You tease the enemy for " + dmg + " damage";
}

ActionDictionary[2].OnUse = function(caster: Character, target: Character){
    console.log("Flee");
    let roll = Math.random() * 100;
    if (roll < 50){
        console.log("Flee successful");
        leaveCombat();
    }
    else{
        console.log("Flee failed");
        
    }
    return "You try to flee";
}