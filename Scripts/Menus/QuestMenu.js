import { PlayerQuestManager } from "../Quests/QuestManager";

const questMenu = document.getElementById("questMenu");
const questList = document.getElementById("questList");

function OpenQuestMenu() {
    questMenu.style.display = "block";
    questList.innerHTML = "";
    for (let quest of PlayerQuestManager.quests) {
        let questDiv = document.createElement("div");
        questDiv.classList.add("quest");
        questDiv.innerHTML = quest.questName;
        questList.appendChild(questDiv);
    }
}

function CloseQuestMenu() {
    questMenu.style.display = "none";
}

