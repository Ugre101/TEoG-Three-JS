import { Scene } from "three";

class AfterBattleAvatar{
    public scene: Scene;
    public lustBar: HTMLElement;
    public lust: HTMLElement;
    public timesCummed: HTMLElement;
    constructor(isPlayer: boolean, scene: Scene) {
        this.scene = scene;
        let temp = isPlayer ? "player" : "enemy";
        this.lustBar = document.getElementById(temp + "LustBar")!;
        this.lust = document.getElementById(temp + "Lust")!;
        this.timesCummed = document.getElementById(temp + "TimesCummed")!;
    }
    updateArousal(arousal: number, maxArousal: number) {
        this.lust.innerHTML = arousal + "/" + maxArousal;
        this.lustBar.style.width = (arousal / maxArousal) * 100 + "%";
    }

    updateTimesCummed(timesCummed: number){
        this.timesCummed.innerHTML = "Orgasms: " + timesCummed;
    }
}