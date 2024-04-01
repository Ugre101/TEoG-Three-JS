import { Scene } from "three";
import { Character } from "../Character/Character";
import { CharacterAvatar } from "../Avatar/CharacterAvatar";
import { AvatarManager } from "../Avatar/AvatarHandler";
 
export class AfterBattleAvatar{
    public scene: Scene;
    public lustBar: HTMLElement;
    public lust: HTMLElement;
    public timesCummed: HTMLElement;
    public avatar: CharacterAvatar;
    constructor(isPlayer: boolean, scene: Scene, character: Character) {
        this.scene = scene;
        let temp = isPlayer ? "player" : "enemy";
        this.lustBar = document.getElementById(temp + "LustBar")!;
        this.lust = document.getElementById(temp + "Lust")!;
        this.timesCummed = document.getElementById(temp + "TimesCummed")!;
        this.avatar = new CharacterAvatar(character);
        this.avatar.LoadAndSetPos({x: 0, y: 0, z: 0}).then(() => {
            this.scene.add(this.avatar.obj);
            console.log("Added Avatar");
        });
    }
    updateArousal(arousal: number, maxArousal: number) {
        this.lust.innerHTML = arousal + "/" + maxArousal;
        this.lustBar.style.width = (arousal / maxArousal) * 100 + "%";
    }

    updateTimesCummed(timesCummed: number){
        this.timesCummed.innerHTML = "Orgasms: " + timesCummed;
    }
}