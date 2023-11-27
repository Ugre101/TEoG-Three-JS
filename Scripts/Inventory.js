import {Player} from "./Player.js";
import {InventoryItem} from "./Items/InventoryItem.js";
import {ItemData} from "./Items/ItemData.js";
import {ItemDictionary} from "./Items/ItemDictionary.js";

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
        } else this.invItems.push(item);
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
     * @param {ItemData|InventoryItem} item
     * @param {Character} onCharacter
     */
    useItem(item, onCharacter = Player) {
        if (this.hasItem(item)) {
            if (ItemDictionary.hasOwnProperty(item.name)) {
                ItemDictionary[item.name].use(onCharacter);
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

