import {ItemData} from "./ItemData";
import {PlayerWallet} from "../Wallet";
import { randomPotion } from "./ItemsDatas/RandomPotion";

export const ItemDictionary = {
    "Growth Potion": new ItemData("Growth Potion", "A potion that makes you grow.", 100, character => {
        character.BodyStats.height.baseValue += 5;
    }),
    "Shrink Potion": new ItemData("Shrink Potion", "A potion that makes you shrink.", 100, character => {
        character.BodyStats.height.baseValue -= 5;
    }),

    "Coin Purse": new ItemData("Coin Purse", "A purse full of coins.", 100, character => {
        PlayerWallet.addGold(100);
    }),
    "Coin Sack": new ItemData("Coin Sack", "A sack full of coins.", 500, character => {
        PlayerWallet.addGold(500);
    }),

    "Basic Meal": new ItemData("Basic Meal", "A basic meal that fills you up.", 25, character => {
        character.BodyStats.fat.baseValue += 5;
    }),
    "Roast Chicken": new ItemData("Roast Chicken", "A roast chicken.", 45, character => {
        character.BodyStats.fat.baseValue += 10;
    }),
    "Whole Roasted Pig": new ItemData("Whole Roasted Pig", "A whole roasted pig.", 200 , character => {
        character.BodyStats.fat.baseValue += 50;
    }),
    "Random Potion": randomPotion
};