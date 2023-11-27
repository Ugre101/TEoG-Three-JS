import { Character } from "../Character/Character.js";
import { controls } from "../../main.js";
import { Menu, MenuManagerInstance } from "../Menu";
import { PlayerInventory } from "../Inventory";
import {Player} from "../Player.js";

const OpenInventoryMenuBtn = document.getElementById("OpenInventoryMenu");
OpenInventoryMenuBtn.addEventListener("click", () => {
    OpenInventoryMenu();
});

const InventoryMenu = new Menu("InventoryMenu");

export function OpenInventoryMenu() {
    MenuManagerInstance.open(InventoryMenu);
    controls.unlock();
    PrintInventory();
}

function PrintInventory() {
    const inventory = document.getElementById("InventoryBag");
    inventory.innerHTML = "";
    for (let item of PlayerInventory.invItems) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("Item");
        itemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p class="UpperRightNumber">${item.amount}</p>`;
        const useButton = document.createElement("button");
        useButton.innerHTML = "Use";
        useButton.addEventListener("click", () => {
            PlayerInventory.useItem(item, Player);
            PrintInventory();
        });
        itemDiv.appendChild(useButton);
        inventory.appendChild(itemDiv);
    }
}

const InventoryBack = document.getElementById("InventoryBack");
InventoryBack.addEventListener("click", () => {
    MenuManagerInstance.close();
});
