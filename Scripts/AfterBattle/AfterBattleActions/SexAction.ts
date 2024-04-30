import { Character } from "../../Character/Character";
import { afterBattleManager } from "../AfterBattleManager";
import { AfterAction, AfterActionType, ReqNeedDick } from "./AfterAction";


class SexAction extends AfterAction {
    constructor(name: string, description: string) {
        super(name, description, AfterActionType.Sex);
    }
}

const Kiss = new SexAction("Kiss", "Kiss your partner.");
Kiss.OnUse = (caster, target) => {
    caster.SexStats.GainArusal(20 * (target.Stats.cha.Value() / 10));
    target.SexStats.GainArusal(20 * (caster.Stats.cha.Value() / 10));
    return "You make out with your partner.";
};

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
    Kiss, GetBlowJob, GiveBlowJob
];
