import {ItemDictionary} from "../Items/ItemDictionary.js";

export class Shopkeeper{
    /**
     *
     * @param {String} title
     * @param {[ItemData]} salesItems
     * @param {String} description
     */
    constructor(title,salesItems,description){
        this.title = title;
        this.salesItems = salesItems;
        this.description = description;
    }
}

const testShopkeeper = new Shopkeeper("Test Shopkeeper",[
    ItemDictionary["Basic Meal"],ItemDictionary["Growth Potion"],ItemDictionary["Shrink Potion"]
],"This is a test shopkeeper.");
