import {Player} from "./Player.js";
import {InventoryItem} from "./Items/InventoryItem.js";
import {ItemData} from "./Items/ItemData.js";
import {ItemDictionary} from "./Items/ItemDictionary.js";
import { Character } from "./Character/Character.js";

class Inventory {
    constructor() {
        this.invItems = [];
    }

    /**
     *
     * @param {ItemData} item
     */
    addItem(item) {
        if (this.hasItem(item)) {
            this.invItems.find(i => i.name === item.name).amount++;
        } else this.invItems.push(new InventoryItem(item.name));
    }

    /**
     * @param{ItemData|InventoryItem} item
     */
    removeItem(item) {
        if (item instanceof InventoryItem)
            this.invItems.splice(this.invItems.indexOf(item), 1);
        else console.error("Not an item");
    }

    /**
     * @param {ItemData|InventoryItem} item
     * @returns {boolean}
     */
    hasItem(item) {
        for (let i of this.invItems) {
            if (i.name === item.name) return true;
        }
        return false;
    }

    /**
     * @param {InventoryItem} item
     * @param {Character} onCharacter
     */
    useItem(item, onCharacter = Player) {
        if (this.hasItem(item)) {
            if (ItemDictionary.hasOwnProperty(item.name)) {
                ItemDictionary[item.name].onUse(onCharacter);
                item.amount--;
            }
            if (item.amount <= 0)
                this.removeItem(item);
        } else {
            console.error("Not an item");
        }
    }
}

export const PlayerInventory = new Inventory();

PlayerInventory.addItem(ItemDictionary["Coin Purse"]);
PlayerInventory.addItem(ItemDictionary["Basic Meal"]);