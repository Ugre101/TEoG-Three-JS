import { Character } from "../../Character/Character";

function OralVorePrey(pred: Character, prey: Character) : string {
    let hDiff = pred.BodyStats.height.value / prey.BodyStats.height.value;
    if (hDiff > 2){
        // pred is much taller than prey
        let t : string = "You look down at your prey and smile, knowing that they're about to become a part of you. You reach down and grab them, pulling them up to your mouth. " +
        "They look up at you with a mix of fear and excitement, but they are powerless to resist as you open your mouth wide and take them in. " +
        "You savor the taste of their flesh as you swallow them whole, feeling them slide down your throat and into your stomach. " +
        "You can feel their struggles and hear their muffled cries as they slide down your throat, but you don't stop until they're completely inside you.";
        return t;
    }
    if (hDiff < 0.5){
        // pred is much shorter than prey
        let t : string = "you walk up to your prey and grab their foot, pulling them towards your mouth. They look at you with a mix of fear and uncertainty " +
        "as you open your mouth wide and take them in, savoring the taste of their flesh as you start to swallow them whole." + 
        " they struggle and squirm as you swallow them, but you're too strong for them to shake you off." +
        " they struggle to comprehend what's happening as they slide down your throat, their body slowly disappearing into your " +
        "smaller body. You can feel their struggles and hear their muffled cries as they slide down your throat, but you don't stop until they're completely inside you.";
        return t;
    }
    return "You open your mouth and let your prey know that you're going to eat them. They look at you with a mix of fear and excitement, but they don't resist. You grab them and pull them into your mouth, savoring the taste of their flesh as you swallow them whole.";
} 