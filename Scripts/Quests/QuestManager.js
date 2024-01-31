import {PlayerInventory} from "../Inventory.js";
import {PlayerWallet} from "../Wallet.js";
import {Player} from "../Player.js";
import { ItemData } from "../Items/ItemData.js";
import { ItemDictionary } from "../Items/ItemDictionary.js";

class QuestReward{
    /**
     * @param {number} gold
     * @param {number} exp
     * @param {ItemData[]} items
     */
    constructor(gold, exp, items = []) {
        this.gold = gold;
        this.exp = exp;
        this.items = items;
    }
    gainReward(character = Player) {
        PlayerWallet.addGold(this.gold);
        character.LevelSystem.gainExp(this.exp);
        for (let item of this.items) {
            PlayerInventory.addItem(item);
        }
    }
}

class Quest {
    /**
     * @param {number} questId
     * @param {string} questName
     * @param {string} questDescription
     * @param {function():boolean} questRequirements
     * @param {QuestReward} questRewards
     * @param {number} maxProgress
     */
    constructor(questId, questName, questDescription, questRequirements, questRewards,maxProgress = 1) {
        this.questId = questId;
        this.questName = questName;
        this.questDescription = questDescription;
        this.questRequirements = questRequirements;
        this.questRewards = questRewards;
        this.maxProgress = maxProgress;
    }
}

const QuestDict = {
    1: new Quest(1, "Test Quest", "Test Quest Description", () => true, new QuestReward(100, 100, [ItemDictionary["Growth Potion"]]), 1),
};




class QuestProgress {
    constructor(questId) {
        this.questId = questId;
        this.progress = 0;
        this.completed = false;
    }
    progressQuest(amount = 1) {
        this.progress += amount;
        let maxProgress = QuestDict[this.questId].maxProgress;
        if (this.progress >= maxProgress) {
            this.progress = maxProgress;
            this.completed = true;
        }
    }
}

class QuestManager{
    constructor() {
        this.quests = [];
        this.completedQuests = [];
    }
    addQuest(quest) {
        if (quest instanceof QuestProgress) {
            this.quests.push(quest);
        }
    }
    removeQuest(quest) {
        if (quest instanceof QuestProgress) {
            this.quests.splice(this.quests.indexOf(quest), 1);
        }
    }

}

export const PlayerQuestManager = new QuestManager();