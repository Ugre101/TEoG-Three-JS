import { DormManagerInstance } from "../../Dorm/DormManager";
import { afterBattleManager } from "../AfterBattleManager";
import { AfterAction, AfterActionType } from "./AfterAction";

const LeaveAction = new AfterAction("Leave", "Leave the battle", AfterActionType.Misc);
LeaveAction.canUse = (caster, target) => true;
LeaveAction.OnUse = (caster, target) => {
    console.log("Action used: " + LeaveAction.name);
    afterBattleManager.LeaveAfterBattle();
    return "";
}

const TakeToDorm = new AfterAction("Take to Dorm", "Take the enemy to your dorm", AfterActionType.Misc);
TakeToDorm.canUse = (caster, target) => {
    if (target.SexStats.Orgasms >= 3)
        return true;
    return false;
}
TakeToDorm.OnUse = (caster, target) => {
    console.log("Action used: " + TakeToDorm.name);
    DormManagerInstance.addDormMate(target);
    // TODO Check if there is more than one enemy
    afterBattleManager.LeaveAfterBattle();
    return "";
}
export const MiscActions = [ LeaveAction ];