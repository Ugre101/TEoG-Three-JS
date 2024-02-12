import { Character } from "../Character/Character";
import { Race } from "../Character/RaceSystem";

export class DormMate extends Character {
    constructor() {
        super(Race.Human);
    }
    tick(ticks: number) {
    }
}
