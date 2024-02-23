import { AfterAction, AfterActionType } from "./AfterAction";

export class VoreAction extends AfterAction {
    constructor(name: string, description: string) {
        super(name,description,AfterActionType.Vore);
    }

}