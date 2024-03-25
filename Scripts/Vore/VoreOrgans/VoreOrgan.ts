import {Stat} from "../../Character/Stats";
import { Character } from "../../Character/Character";
import { BodyStat } from "../../Character/Body/Body";

class DigestionMode {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class VoreOrgan {
    static Digestion = new DigestionMode("Digestion");
    static Endosoma = new DigestionMode("Endosoma");
    voreExp: number = 0;
    preys: Character[] = [];
    currentMode: DigestionMode;
    constructor() {
        this.currentMode = VoreOrgan.Digestion;
    }

    addPrey(character: Character) {
        this.preys.push(character);
    }

    removePrey(prey: Character): Character[] {
        return this.preys.splice(this.preys.indexOf(prey), 1);
    }

    tickPreys(ticks: number, voreStrengths){
        switch (this.currentMode) {
            case VoreOrgan.Digestion:
                this.digestPreys(ticks, voreStrengths.digestionStrength);
                break;
            case VoreOrgan.Endosoma:
                break;
        }
    }

    digestPreys(ticks: number, digestStrength) {
        for (let prey of this.preys) {
            let digestion = ticks * digestStrength;
            digestion = digestBodyStats(prey.BodyStats.fat, digestion);
            if (digestion > 0)
                digestion = digestBodyStats(prey.BodyStats.muscle, digestion);
            if (digestion > 0)
                digestion = digestBodyStats(prey.BodyStats.height, digestion);
            return digestion > 0;
        }
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
    totalPreyWeight() {
        let total = 0;
        for (let prey of this.preys) {
            total += prey.BodyStats.weight;
        }
        return total;
    }

}

export class CockVore extends VoreOrgan{
    static CockTf = new DigestionMode("CockTf");
    constructor() {
        super();
    }
    tickPreys(ticks: number, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
        switch (this.currentMode) {
            case CockVore.CockTf:
                this.transformPreys(ticks, voreStrengths.transformStrength);
                break;
        }
    }
    transformPreys(ticks: number, transformStrength) {
        for (let prey of this.preys) {
           
        }
    }
}

 export class Stomach extends VoreOrgan{
    static Absorb = new DigestionMode("Absorb");
    constructor() {
        super();
    }
    tickPreys(ticks: number, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
        switch (this.currentMode) {
            case Stomach.Absorb:
                this.transformPreys(ticks, voreStrengths.transformStrength);
                break;
        }
    }
    transformPreys(ticks: number, transformStrength) {
        for (let prey of this.preys) {
           
        }
    }
}

export class VaginaVore extends VoreOrgan{
    static Unbirth = new DigestionMode("Unbirth");
    constructor() {
        super();
    }

    tickPreys(ticks, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
        switch (this.currentMode) {
            case VaginaVore.Unbirth:
                this.transformPreys(ticks, voreStrengths.transformStrength);
                break;
        }
    }

    transformPreys(ticks, transformStrength) {
        for (let prey of this.preys) {
            
        }
    }

}

export class BreastVore extends VoreOrgan{
    static Milk = new DigestionMode("Milk");
    static BreastTf = new DigestionMode("BreastTf");
    constructor() {
        super();
    }

    tickPreys(ticks, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
        switch (this.currentMode) {
            case BreastVore.BreastTf:
                this.transformPreys(ticks, voreStrengths.transformStrength);
                break;
        }
    }

    transformPreys(ticks, transformStrength) {
        for (let prey of this.preys) {
            
        }
    }
}

export class BallsVore extends VoreOrgan{
    static Cum = new DigestionMode("Cum");
    constructor() {
        super();
    }

    tickPreys(ticks, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
    }

    transformPreys(ticks, transformStrength) {
        for (let prey of this.preys) {
            
        }
    }
}