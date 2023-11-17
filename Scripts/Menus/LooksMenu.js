import { Menu, MenuManagerInstance } from "../Menu.js";
import { metricsOrImperials } from "../Settings.js";
import {Player} from "../Player.js";

const LooksMenu = new Menu("LooksMenu");

const OpenLooksMenu = document.getElementById("OpenLooksMenu");
OpenLooksMenu.addEventListener("click", function () {
    OpenLooks();
});

const LooksBack = document.getElementById("LooksBack");
LooksBack.addEventListener("click", function () {
    CloseLooks();
});

function CloseLooks() {
    MenuManagerInstance.close();
}

export function OpenLooks() {
    MenuManagerInstance.open(LooksMenu);
    PrintLooks();
}

const LooksGeneralInfo= document.getElementById("LooksGeneralInfo");
function PrintLooks() {
    let desc = `You are ${Player.fullName} an ${Player.Age.yearsOld} years old ${Player.RaceSystem.raceName(false)}.`;
    desc += `<br>You are ${metricsOrImperials.cmOrInches(Player.BodyStats.height)} tall and weigh ${metricsOrImperials.kgOrLbs(Player.BodyStats.weight)}.`;
    LooksGeneralInfo.innerHTML = desc;
}
