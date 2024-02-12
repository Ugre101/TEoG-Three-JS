import { Character } from "../Character/Character";

export class ItemData {
    public name: string;
    public description: string;
    public onUse: (arg0: Character) => void;
    constructor(name: string, description: string, onUse: (arg0: Character) => void) {
        this.name = name;
        this.description = description;
        this.onUse = onUse;
    }
}