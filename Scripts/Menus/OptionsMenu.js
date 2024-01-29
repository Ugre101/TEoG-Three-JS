import { Menu, MenuManagerInstance } from "../Menu";
import { voreSettings } from "../Vore/VoreSystem";

const VoreToggle = document.getElementById("VoreToggle");
const OptionsMenu = new Menu("OptionsMenu");
const OpenOptionsMenu = document.getElementById("OpenOptionsMenu");
OpenOptionsMenu.addEventListener("click", function () {
    OpenOptions();
});

const OptionsBack = document.getElementById("OptionsBack");
OptionsBack.addEventListener("click", function () {
    CloseOptions();
});

export function OpenOptions() {
    if (!MenuManagerInstance.open(OptionsMenu))
        return;
    VoreToggle.innerHTML = "Vore enabled: " + voreSettings.enabled;
}

export function CloseOptions() {
    MenuManagerInstance.close();
}

VoreToggle.addEventListener("click", function () {
    VoreToggle.innerHTML = "Vore enabled: " + voreSettings.toggleVore();
});
