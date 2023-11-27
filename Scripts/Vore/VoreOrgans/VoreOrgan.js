import {Prey} from "../Prey.js";
import {Stat} from "../../Character/Stats.js";

class DigestionMode {
    constructor(name) {
        this.name = name;
    }
}

export class VoreOrgan {
    static Digestion = new DigestionMode("Digestion");
    static Endosoma = new DigestionMode("Endosoma");
    constructor() {
        this.voreExp = 0;
        this.preys = [];
        this.currentMode = VoreOrgan.Digestion;
    }

    /**
     * @param {Character} character to become prey
     */
    addPrey(character) {
        let prey = new Prey();
        Object.assign(prey,character); // TODO thoroughly test this
        this.preys.push(prey);
    }

    /**
     * @param {Prey} prey
     * @returns {Prey[]}
     */
    removePrey(prey) {
        return this.preys.splice(this.preys.indexOf(prey), 1);
    }

    tickPreys(ticks, voreStrengths){
        switch (this.currentMode) {
            case VoreOrgan.Digestion:
                this.digestPreys(ticks, voreStrengths.digestionStrength);
                break;
            case VoreOrgan.Endosoma:
                break;
        }
    }

    digestPreys(ticks, digestStrength) {
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
    tickPreys(ticks, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
        switch (this.currentMode) {
            case CockVore.CockTf:
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

class Stomach extends VoreOrgan{
    static Absorb = new DigestionMode("Absorb");
    constructor() {
        super();
    }
    tickPreys(ticks, voreStrengths) {
        super.tickPreys(ticks, voreStrengths);
        switch (this.currentMode) {
            case Stomach.Absorb:
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