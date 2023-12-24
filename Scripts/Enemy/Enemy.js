import {Character} from "../Character/Character.js";

export class Enemy extends Character{
    constructor(startingRace) {
        super(startingRace);
        this.isSpecial = false;
    }

}