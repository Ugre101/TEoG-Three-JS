import {Player} from "./Player";
import {InventoryItem} from "./Items/InventoryItem";
import {ItemData} from "./Items/ItemData";
import {ItemDictionary} from "./Items/ItemDictionary";
import { Character } from "./Character/Character";

class Inventory {
    public invItems: InventoryItem[] = [];
    
    addItem(item: ItemData) {
        if (this.hasItem(item)) {
            this.invItems.find(i => i.name === item.name)!.amount++;
        } else this.invItems.push(new InventoryItem(item.name));
    }

    removeItem(item: ItemData | InventoryItem) {
        if (item instanceof InventoryItem){
            this.invItems.splice(this.invItems.indexOf(item), 1);
        }
        else if (item instanceof ItemData) {
            let invItem = this.invItems.find(i => i.name === item.name);
            if (invItem) {
                this.invItems.splice(this.invItems.indexOf(invItem), 1);
            }
        }
        else console.error("Not an item");
    }

    hasItem(item: ItemData | InventoryItem): boolean {
        return this.invItems.some(i => i.name === item.name);
    }

    useItem(item: InventoryItem, onCharacter: Character = Player) {
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