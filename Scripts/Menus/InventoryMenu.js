import { Player } from "../Player";
import { controls } from "../../main";
import { PlayerInventory } from "./Inventory";

const OpenInventoryMenuBtn = document.getElementById('OpenInventoryMenu');
OpenInventoryMenuBtn.addEventListener('click', () => {
    OpenInventoryMenu();
});


const InventoryMenu = document.getElementById('InventoryMenu');


export function OpenInventoryMenu() {
    InventoryMenu.style.display = 'block';
    controls.unlock();
    PrintInventory();
}

function PrintInventory(){
    const inventory = document.getElementById('InventoryBag');
    inventory.innerHTML = "";
    for (let item of PlayerInventory.items){
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('Item');
        itemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p class="UpperRightNumber">${item.amount}</p>`;
        const useButton = document.createElement('button');
        useButton.innerHTML = "Use";
        useButton.addEventListener('click', () => {
            PlayerInventory.useItem(item);
            PrintInventory();
        });
        itemDiv.appendChild(useButton);
        inventory.appendChild(itemDiv);
    }
}

const InventoryBack = document.getElementById('InventoryBack');
InventoryBack.addEventListener('click', () => {
    CloseInventoryMenu();
});

function CloseInventoryMenu() {
    InventoryMenu.style.display = 'none';
}