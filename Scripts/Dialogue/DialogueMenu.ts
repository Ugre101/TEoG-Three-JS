import {Dialogue, DialogueNode} from "./Dialogue.js";

export function InDialogue() {
    return dialogueMenu.style.display === "block";
}

const dialogueMenu = document.getElementById("dialogueMenu")!;
const dialogueText = document.getElementById("dialogueText")!;
const dialogueTitle = document.getElementById("dialogueTitle")!;

const dialogueButtons = document.getElementById("dialogueButtons")!;

function stopTalking() {
    dialogueMenu.style.display = "none";
}

function nextNode(node: DialogueNode) {
    dialogueButtons.innerHTML = "";
    if (node.isEndNode) {
        stopTalking();
        return;
    }
    PrintNode(node);
}

function PrintNode(currentNode: DialogueNode) {
    dialogueTitle.innerText = currentNode.title;
    dialogueText.innerText = currentNode.text;
    currentNode.onEnter();

    currentNode.childNodes.forEach(node => {
        let button = document.createElement("button");
        button.innerText = node.title;
        button.onclick = () => {
            currentNode.onExit();
            nextNode(node);
        };
        dialogueButtons.appendChild(button);
    });
}

export function startDialogue(dialogue: Dialogue){
    let currentNode = dialogue.start();
    PrintNode(currentNode);
    dialogueMenu.style.display = "block";
}

