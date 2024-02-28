import { Character } from "../Character/Character";

export class ItemData {
    public name: string;
    public description: string;
    public value: number;
    public onUse: (arg0: Character) => void;
    constructor(name: string, description: string, value: number, onUse: (arg0: Character) => void) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.onUse = onUse;
    }
}