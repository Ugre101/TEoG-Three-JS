import { StomachVoreCapacity } from "../../Vore/VoreFunctions";
import { AfterAction, AfterActionType } from "./AfterAction";

export class VoreAction extends AfterAction {
    constructor(name: string, description: string) {
        super(name,description,AfterActionType.Vore);
    }

}

const oralVore = new VoreAction("Oral Vore","Oral Vore");
oralVore.canUse = (player,enemy) => {
    return true;
}
oralVore.OnUse = (player,enemy) => {
    return "Oral Vore";
}










export const VoreActions: VoreAction[] = [ oralVore ];