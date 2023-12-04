import {Dialogue} from "./Dialogue.js";



const dialogueMenu = document.getElementById("dialogueMenu");
const dialogueText = document.getElementById("dialogueText");
const dialogueTitle = document.getElementById("dialogueTitle");

const dialogueButtons = document.getElementById("dialogueButtons");

function stopTalking() {
    dialogueMenu.style.display = "none";
}

function nextNode(node) {
    dialogueButtons.innerHTML = "";
    if (node.isEndNode) {
        stopTalking();
        return;
    }
    PrintNode(node);
}

/**
 * @param {DialogueNode} currentNode
 */
function PrintNode(currentNode) {
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

/**
 *
 * @param {Dialogue} dialogue
 */
export function startDialogue(dialogue){
    let currentNode = dialogue.start();
    PrintNode(currentNode);
    dialogueMenu.style.display = "block";
}

