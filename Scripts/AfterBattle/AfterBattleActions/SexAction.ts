import { Character } from "../../Character/Character";
import { afterBattleManager } from "../AfterBattleManager";
import { AfterAction, AfterActionType, ReqNeedDick } from "./AfterAction";

enum SexRole {
    Top,
    Bottom,
    Switch
}
class SexAction extends AfterAction {
    public role: SexRole = SexRole.Switch;
    constructor(name: string, description: string, role = SexRole.Switch) {
        super(name, description, AfterActionType.Sex);
    }
}

const Kiss = new SexAction("Kiss", "Kiss your partner.");
Kiss.OnUse = (caster, target) => {
    caster.SexStats.GainArusal(20 * (target.Stats.cha.Value() / 10));
    target.SexStats.GainArusal(20 * (caster.Stats.cha.Value() / 10));
    return "You make out with your partner.";
};

const GetBlowJob = new SexAction("Get sucked", "Get a blowjob from your partner.", SexRole.Top);
GetBlowJob.reqs.push(ReqNeedDick.Caster);
GetBlowJob.OnUse = (caster, target) => {
    return "";
};
GetBlowJob.OnContinueUse = (caster, target) => {
    return "";
}

const GiveBlowJob = new SexAction("Suck dick", "Give your partner a blowjob.",SexRole.Bottom)
GiveBlowJob.reqs.push(ReqNeedDick.Target);
GiveBlowJob.OnUse = (caster,target) => {
    return "";
};
GiveBlowJob.OnContinueUse = (caster,target) => {
    return "";
}

const GetRimjob = new SexAction("Receive rimjob","", SexRole.Top);
GetRimjob.OnUse = (caster, targer) => {
    // If suffient dominant then facesitt?
    return "";
}
GetRimjob.OnContinueUse = (caster, target) => {
    return "";
}

const GiveRimjob = new SexAction("Give rimjob", "", SexRole.Bottom);
GiveRimjob.OnUse = (caster, targer) => {
    return "";
}
GiveRimjob.OnContinueUse = (caster, target) => {
    return "";
}

const Missionary = new SexAction("Give misionary","", SexRole.Top);
Missionary.OnUse = (caster, target) => {
    return "";
}
Missionary.OnUse = (caster, target) => {
    return "";
}

const ReceiveMissionary = new SexAction("Recive misionary","", SexRole.Bottom);
ReceiveMissionary.OnUse = (caster, target) => {
    return "";
}
ReceiveMissionary.OnContinueUse = (caster, target) => {
    return "";
}



export const SexActions: SexAction[] = [
    Kiss, GetBlowJob, GiveBlowJob
];
