import {Prey} from "../Prey";
import {Stat} from "../../Character/Stats";
import { Character } from "../../Character/Character";

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
    preys: Prey[] = [];
    currentMode: DigestionMode;
    constructor() {
        this.currentMode = VoreOrgan.Digestion;
    }

  x
    addPrey(character: Character) {
        let prey = new Prey();
        Object.assign(prey,character); // TODO thoroughly test this
        this.preys.push(prey);
    }

    removePrey(prey: Prey): Prey[] {
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
            if(prey.digest(ticks, digestStrength)){

            }
        }
    }


}

class CockVore extends VoreOrgan{
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
            if(prey.absorb(ticks, transformStrength)){

            }
        }
    }
}

class Stomach extends VoreOrgan{
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
            if(prey.absorb(ticks, transformStrength)){

            }
        }
    }
}

class VaginaVore extends VoreOrgan{
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
            if(prey.absorb(ticks, transformStrength)){

            }
        }
    }

}