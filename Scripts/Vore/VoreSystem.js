import { Character } from "../Player";

class VoreSettings {
    constructor() {
        this.enabled = false;
    }
    toggleVore() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

export const voreSettings = new VoreSettings();

class Prey {
    constructor(character) {
        this.character = character;
    }

    digest() {}
    absorb() {}
    transform() {}
}
export class VoreSystem {
    constructor() {
        this.prey = [];
        this.voreExp = 0;
        this.voreLevel = 1;
        this.vorePerks = [];
    }
    addPrey(character) {
        if (character instanceof Character) this.prey.push(new Prey(character));
    }
    removePrey(prey) {
        let released = null;
        if (prey instanceof Prey)
            released = this.prey.splice(this.prey.indexOf(prey), 1);
        return released;
    }
    gainVoreExp(exp) {
        this.voreExp += exp;
        if (this.voreExp >= this.voreLevel * 100) {
            this.voreExp -= this.voreLevel * 100;
            this.voreLevel++;
        }
    }
}
