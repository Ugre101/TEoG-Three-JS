import { Character } from "../Character/Character.ts";
import { Race } from "../Character/RaceSystem.js";

export class DormMate extends Character {
    constructor() {
        super(Race.Human);
    }
    tick(ticks) {
    }
}
