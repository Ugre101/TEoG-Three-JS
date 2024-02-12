import { ItemData } from "../Items/ItemData";
import {ItemDictionary} from "../Items/ItemDictionary";

export class Shopkeeper{
    title: string;
    salesItems: ItemData[];
    description: string;
    constructor(title: string,salesItems: ItemData[],description: string){
        this.title = title;
        this.salesItems = salesItems;
        this.description = description;
    }
}

const testShopkeeper = new Shopkeeper("Test Shopkeeper",[
    ItemDictionary["Basic Meal"],ItemDictionary["Growth Potion"],ItemDictionary["Shrink Potion"]
],"This is a test shopkeeper.");
