import { ItemData } from "../ItemData";
// Test for having invidaual files for each item effect
export const randomPotion: ItemData = new ItemData("Random Potion", "A potion that does something random.", 50, character => {
    const randomPotion = Math.floor(Math.random() * 2);
    if (randomPotion === 0) {
        console.log("You feel a strange sensation in your body.");
    } else {
        console.log("You feel a strange sensation in your mind");
    }
})