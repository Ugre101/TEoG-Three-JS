import {ItemData} from "./ItemData.js";
import {PlayerWallet} from "../Wallet.js";

export const ItemDictionary = {
    "Growth Potion": new ItemData("Growth Potion", "A potion that makes you grow.", character => {
        character.BodyStats.height.baseValue += 5;
    }),
    "Shrink Potion": new ItemData("Shrink Potion", "A potion that makes you shrink.", character => {
        character.BodyStats.height.baseValue -= 5;
    }),

    "Coin Purse": new ItemData("Coin Purse", "A purse full of coins.", character => {
        PlayerWallet.addGold(100);
    }),
    "Coin Sack": new ItemData("Coin Sack", "A sack full of coins.", character => {
        PlayerWallet.addGold(500);
    }),

    "Basic Meal": new ItemData("Basic Meal", "A basic meal that fills you up.", character => {
        character.BodyStats.fat.baseValue += 5;
    }),
    "Roast Chicken": new ItemData("Roast Chicken", "A roast chicken.", character => {
        character.BodyStats.fat.baseValue += 10;
    }),
    "Whole Roasted Pig": new ItemData("Whole Roasted Pig", "A whole roasted pig.", character => {
        character.BodyStats.fat.baseValue += 50;
    }),
};