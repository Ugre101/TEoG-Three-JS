import { StatType } from "../Character/Stats";
import { MenuManagerInstance, Menu } from "../Menu";
import {Player} from "../Player";

const LevelMenu = new Menu("LevelMenu");

const LevelMenuBtn = document.getElementById("LevelMenuBtn")!;
LevelMenuBtn.addEventListener("click", () => {
    OpenLevelMenu();
});
export function OpenLevelMenu() {
    if (!MenuManagerInstance.open(LevelMenu))
        return;
    levelPerks.style.display = "block";
    levelStats.style.display = "none";

    LevelStatsBtns.style.display = "block";
    levelPerksBtns.style.display = "none";
    PrintLevel();
}

const StatPoints = document.getElementById("StatPoints")!;
const PerkPoints = document.getElementById("PerkPoints")!;

class statBtn {
    btn: HTMLElement;
    statType: StatType;

    constructor(btnId: string, statType: StatType) {
        this.btn = document.getElementById(btnId)!;
        this.btn.addEventListener("mouseover", () => {
            this.btn.style.backgroundColor =
                Player.LevelSystem.statPoints > 0 ? "green" : "red";
        });
        this.btn.addEventListener("mouseout", () => {
            this.btn.style.backgroundColor = "#b9794d";
        });
        this.btn.addEventListener("click", () => {
            if (Player.LevelSystem.useStatPoint()) {
                Player.Stats.getStatByType(statType).increase();
                this.btn.innerHTML = `${
                    statType
                }  ${Player.Stats.getStatByType(statType).Value()}`;
                StatPoints.innerHTML = `Stat Points: ${Player.LevelSystem.statPoints}`;
            } else this.btn.style.backgroundColor = "red";
        });
    }
}

class perkBtn {
    constructor(btnId: string) {

    }
}

const lvlStr = new statBtn("lvlStr", StatType.Str);

const lvlDex = new statBtn("lvlDex", StatType.Dex);

const lvlCon = new statBtn("lvlCon", StatType.Con);

const lvlInt = new statBtn("lvlInt", StatType.Int);

const lvlWis = new statBtn("lvlWis", StatType.Wis);

const lvlCha = new statBtn("lvlCha", StatType.Cha);

function PrintLevel() {
    console.log(Player.Stats);
    StatPoints.innerHTML = `Stat Points: ${Player.LevelSystem.statPoints}`;
    lvlStr.btn.innerHTML = `Strength  ${Player.Stats.str.Value()}`;
    lvlDex.btn.innerHTML = `Dexterity  ${Player.Stats.dex.Value()}`;
    lvlCon.btn.innerHTML = `Constitution  ${Player.Stats.con.Value()}`;
    lvlInt.btn.innerHTML = `Intelligence  ${Player.Stats.int.Value()}`;
    lvlWis.btn.innerHTML = `Wisdom  ${Player.Stats.wis.Value()}`;
    lvlCha.btn.innerHTML = `Charisma  ${Player.Stats.cha.Value()}`;
}

function PrintPerks() {}

const LevelBack = document.getElementById("LevelBack")!;
LevelBack.addEventListener("click", () => {
    MenuManagerInstance.close();
});

const levelStats = document.getElementById("levelStats")!;
const LevelStatsBtns = document.getElementById("LevelStatsBtns")!;

const levelPerks = document.getElementById("levelPerks")!;
const levelPerksBtns = document.getElementById("levelPerksBtns")!;

levelStats.addEventListener("click", () => {
    levelStats.style.display = "none";
    levelPerks.style.display = "block";
    LevelStatsBtns.style.display = "Block";
    levelPerksBtns.style.display = "none";
});

levelPerks.addEventListener("click", () => {
    levelPerks.style.display = "none";
    levelStats.style.display = "block";
    LevelStatsBtns.style.display = "none";
    levelPerksBtns.style.display = "block";
});
