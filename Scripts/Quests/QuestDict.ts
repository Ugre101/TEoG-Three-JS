import { ItemDictionary } from "../Items/ItemDictionary";
import { Quest, QuestReward } from "./QuestManager";

export const QuestDict = {
    1: new Quest(1, "Test Quest", "Test Quest Description", () => true, new QuestReward(100, 100, [ItemDictionary["Growth Potion"]]), 1),
};
