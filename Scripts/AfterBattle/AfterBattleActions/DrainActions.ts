import { AfterAction, AfterActionType } from "./AfterAction";

class DrainAction extends AfterAction{
    constructor(name: string, description: string) {
        super(name, description, AfterActionType.Drain);
    }
}