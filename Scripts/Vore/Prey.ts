import { BodyStat } from "../Character/Body/Body";
import {Character} from "../Character/Character";
import { Race } from "../Character/RaceSystem";

export class Prey extends Character {
    public transformProgress: number = 0;
    constructor() {
        super(Race.Human);
    }

    digest(ticks: number, digestStrength) {
        let digestion = ticks * digestStrength;
        digestion = digestBodyStats(this.BodyStats.fat, digestion);
        if (digestion > 0)
            digestion = digestBodyStats(this.BodyStats.muscle, digestion);
        if (digestion > 0)
            digestion = digestBodyStats(this.BodyStats.height, digestion);
        return digestion > 0;

        function digestBodyStats(bodyStat: BodyStat, by: number) {
            if (bodyStat.baseValue >= by) {
                bodyStat.baseValue -= by;
                return 0;
            }
            let have = bodyStat.baseValue;
            bodyStat.baseValue = 0;
            return by - have;
        }
    }

    absorb(ticks: number, tfStrength) {
        this.transformProgress += ticks * tfStrength;
        return this.transformProgress >= 100;
    }

}