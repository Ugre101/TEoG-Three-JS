import { Character } from "../../Character/Character";
import { afterBattleManager } from "../AfterBattleManager";
import { AfterAction, AfterActionType, ReqNeedDick } from "./AfterAction";


class SexAction extends AfterAction {
    constructor(name: string, description: string) {
        super(name, description, AfterActionType.Sex);
    }
}

const Leave = new AfterAction("Leave", "Leave the area", AfterActionType.Misc);
Leave.canUse = function(caster: Character, target: Character)  { return true;}
Leave.OnUse = function(caster: Character, target: Character) {
    console.log("Leaving");
    afterBattleManager.LeaveAfterBattle();
    return "Leaving";
}

const GetBlowJob = new SexAction("Get sucked", "Get a blowjob from your partner.");
GetBlowJob.reqs.push(ReqNeedDick.Caster);
GetBlowJob.OnUse = (caster, target) => {
    return "";
};
GetBlowJob.OnContinueUse = (caster, target) => {
    return "";
}

const GiveBlowJob = new SexAction("Suck dick", "Give your partner a blowjob.")
GiveBlowJob.reqs.push(ReqNeedDick.Target);
GiveBlowJob.OnUse = (caster,target) => {
    return "";
};
GiveBlowJob.OnContinueUse = (caster,target) => {
    return "";
}

export const SexActions: SexAction[] = [
    Leave,
    GetBlowJob, GiveBlowJob
];
