import { ItemData } from "../Items/ItemData";
import { Shopkeeper } from "../Npcs/Shopkeeper";
import { PlayerWallet } from "../Wallet";
import { PlayerInventory } from "../Inventory";

const shopMenu = document.getElementById("shopMenu")!;
const shopTitle = document.getElementById("shopTitle")!;
const shopItems = document.getElementById("shopItems")!;

const shopBack = document.getElementById("shopBack")!;

class ItemBtn {
    private Item: ItemData;
    public Btn: HTMLButtonElement;
    constructor(item: ItemData,) {
        this.Item = item;
        this.Btn = document.createElement("button");
        this.Btn.textContent = item.name;
        this.Btn.onclick = () => {
            tryBuy(this.Item);
        };
    }

    canAfford() {
        return PlayerWallet.canAfford(this.Item.value);
    }
}

const addedItemBtns: ItemBtn[] = [];

export function openShopMenu(shopkeeper: Shopkeeper) {
    shopMenu.style.display = "block";
    shopTitle.textContent = shopkeeper.title;
    addedItemBtns.forEach(btn => shopItems.removeChild(btn.Btn));
    for (const item of shopkeeper.salesItems) {
        const btn  = new ItemBtn(item);
        shopItems.appendChild(btn.Btn);
    }
}

function tryBuy(item: ItemData){
    if (PlayerWallet.tryBuy(item.value)) {
        PlayerInventory.addItem(item);
    }
}