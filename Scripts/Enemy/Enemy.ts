import {Character} from "../Character/Character.ts";
import { Race } from "../Character/RaceSystem.js";

export class Enemy extends Character{
    public isSpecial: boolean = false;
    constructor(startingRace: Race) {
        super(startingRace);
    }

}