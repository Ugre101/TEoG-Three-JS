import { PlayerQuestManager } from "../Quests/QuestManager";

function OpenQuestMenu() {
    let questMenu = document.getElementById("quest-menu");
    questMenu.style.display = "block";
    let questList = document.getElementById("quest-list");
    questList.innerHTML = "";
    for (let quest of PlayerQuestManager.quests) {
        let questDiv = document.createElement("div");
        questDiv.classList.add("quest");
        questDiv.innerHTML = quest.questName;
        questList.appendChild(questDiv);
    }
}

function CloseQuestMenu() {
    let questMenu = document.getElementById("quest-menu");
    questMenu.style.display = "none";
}

