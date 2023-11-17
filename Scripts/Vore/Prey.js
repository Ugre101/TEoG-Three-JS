import {Character} from "../Character/Character.js";

export class Prey extends Character {
    constructor() {
        super();
        this.transformProgress = 0;
    }

    digest(ticks, digestStrength) {
        let digestion = ticks * digestStrength;
        digestion = digestBodyStats(this.BodyStats.fat, digestion);
        if (digestion > 0)
            digestion = digestBodyStats(this.BodyStats.muscle, digestion);
        if (digestion > 0)
            digestion = digestBodyStats(this.BodyStats.height, digestion);
        return digestion > 0;

        function digestBodyStats(bodyStat, by) {
            if (bodyStat.baseValue >= by) {
                bodyStat.baseValue -= by;
                return 0;
            }
            let have = bodyStat.baseValue;
            bodyStat.baseValue = 0;
            return by - have;
        }
    }

    absorb(ticks, tfStrength) {
        this.transformProgress += ticks * tfStrength;
        return this.transformProgress >= 100;
    }

}