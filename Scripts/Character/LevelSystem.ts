import { Perk } from "../Perk";

export class LevelSystem {
    public level: number = 1;
    public exp: number = 0;
    public statPoints: number = 0;
    public perkPoints: number = 0;
    public perks: string[] = [];

    neededExp() {
        return 100 * this.level;
    }

    gainExp(exp: number) {
        this.exp += exp;
        while (this.exp >= this.neededExp()) {
            this.exp -= this.neededExp();
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.statPoints += 5;
        this.perkPoints += 1;
    }

    useStatPoint() {
        if (this.statPoints > 0) {
            this.statPoints--;
            return true;
        }
        return false;
    }

    usePerkPoint(cost = 1) {
        if (this.perkPoints >= cost) {
            this.perkPoints -= cost;
            return true;
        }
        return false;
    }
}

