import { Player } from "../Player";

class Item{
    constructor(name, description,onUse ,amount = 1){
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.onUse = onUse;
    }

}

class Inventory {
    constructor(){
        this.items = [];
    }
    addItem(item){
        if (item instanceof Item)
            if (this.hasItem(item)){
                this.items.find((i) => i.name == item.name).amount++;
            } else 
                this.items.push(item);
        else console.error("Not an item");
    }
    removeItem(item){
        if (item instanceof Item)
            this.items.splice(this.items.indexOf(item), 1);
        else console.error("Not an item");
    }
    hasItem(item){
        if (item instanceof Item) {
            for (let i of this.items) {
                if (i.name == item.name)
                    return true;
            }
            return false;
        }    
        else console.error("Not an item");
    }
    useItem(item){
        if (this.hasItem(item)){
            item.onUse();
            item.amount--;
            if (item.amount <= 0)
                this.removeItem(item);
        }
        else console.error("Not an item");
    }
}

export const PlayerInventory = new Inventory();
PlayerInventory.addItem(new Item("Test", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("T5est", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Teast", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test2", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test3", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test", "Test", () => {console.log("Test")}));
PlayerInventory.addItem(new Item("Test", "Test", () => {console.log("Test")}));
