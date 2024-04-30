import { afterBattleManager } from "../AfterBattleManager";
import { AfterAction, AfterActionType } from "./AfterAction";

const LeaveAction = new AfterAction("Leave", "Leave the battle", AfterActionType.Misc);
LeaveAction.canUse = (caster, target) => true;
LeaveAction.OnUse = (caster, target) => {
    console.log("Action used: " + LeaveAction.name);
    afterBattleManager.LeaveAfterBattle();
    return "";
}

export const MiscActions = [ LeaveAction ];