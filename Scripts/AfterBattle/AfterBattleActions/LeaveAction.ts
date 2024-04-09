import { afterBattleManager } from "../AfterBattleManager";
import { AfterAction, AfterActionType } from "./AfterAction";

export const LeaveAction = new AfterAction("Leave", "Leave the battle", AfterActionType.Misc);
LeaveAction.OnUse = (caster, target) => {
    console.log("Action used: " + LeaveAction.name + " on " + target.firstName);
    afterBattleManager.LeaveAfterBattle();
    return "";
}