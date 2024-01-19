import { Character } from "../Character/Character";

export class ItemData {
    /**
     *
     * @param {string} name
     * @param {string} description
     * @param {function(Character) : void} onUse
     */
    constructor(name, description, onUse) {
        this.name = name;
        this.description = description;
        this.onUse = onUse;
    }
}