class AfterBattleAvatar{
    constructor(isPlayer, scene) {
        this.scene = scene;
        let temp = isPlayer ? "player" : "enemy";
        this.lustBar = document.getElementById(temp + "LustBar");
        this.lust = document.getElementById(temp + "Lust");

        this.timesCummed = document.getElementById(temp + "TimesCummed");
    }
    updateArousal(arousal, maxArousal) {
        this.lust.innerHTML = arousal + "/" + maxArousal;
        this.lustBar.style.width = (arousal / maxArousal) * 100 + "%";
    }

    updateTimesCummed(timesCummed){
        this.timesCummed.innerHTML = timesCummed;
    }
}