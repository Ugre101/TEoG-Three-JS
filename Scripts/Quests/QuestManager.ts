import {PlayerInventory} from "../Inventory";
import {PlayerWallet} from "../Wallet";
import {Player} from "../Player";
import { ItemData } from "../Items/ItemData";
import { Character } from "../Character/Character";
import { QuestDict } from "./QuestDict";

export class QuestReward{
    gold: number;
    exp: number;
    items: ItemData[];
    constructor(gold: number, exp: number, items: ItemData[] = []) {
        this.gold = gold;
        this.exp = exp;
        this.items = items;
    }
    gainReward(character:Character = Player) {
        PlayerWallet.addGold(this.gold);
        character.LevelSystem.gainExp(this.exp);
        for (let item of this.items) {
            PlayerInventory.addItem(item);
        }
    }
}

export class Quest {
    questId: number;
    questName: string;
    questDescription: string;
    questRequirements: () => boolean;
    questRewards: QuestReward;
    maxProgress: number;

    constructor(questId: number, questName: string, questDescription: string, questRequirements: () => boolean, questRewards: QuestReward,maxProgress: number = 1) {
        this.questId = questId;
        this.questName = questName;
        this.questDescription = questDescription;
        this.questRequirements = questRequirements;
        this.questRewards = questRewards;
        this.maxProgress = maxProgress;
    }
}

class QuestProgress {
    questId: number;
    progress: number;
    completed: boolean;
    constructor(questId: number) {
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
    quests: Quest[] = [];
    completedQuests: Quest[]= [];
  
    addQuest(quest: Quest) {
        this.quests.push(quest);
    }
    removeQuest(quest: Quest) {
        this.quests.splice(this.quests.indexOf(quest), 1);
    }

}

export const PlayerQuestManager = new QuestManager();