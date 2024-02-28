import {Dialogue, DialogueNode} from "./Dialogue";

const testDialogueNode = new DialogueNode("Hello World", "Hello World");
const testDialogueNode2 = new DialogueNode("Hello World 2", "Hello World 2");
const testDialogueNode3 = new DialogueNode("Hello World 3", "Hello World 3");
const textExitNode = new DialogueNode("Goodbye World", "Goodbye World", true);
export const testDialogue = new Dialogue("Test Dialogue", testDialogueNode);

testDialogueNode2.onEnter = () => {
    console.log("Hello World 2");
};
testDialogueNode.childNodes.push(textExitNode);
testDialogueNode.childNodes.push(testDialogueNode2);
testDialogueNode.childNodes.push(testDialogueNode3);
//testDialogueNode.childNodes.push(testDialogueNode3);
//testDialogueNode.childNodes.push(testDialogueNode3);
//testDialogueNode.childNodes.push(testDialogueNode3);
//testDialogueNode.childNodes.push(testDialogueNode3);

testDialogueNode2.childNodes.push(textExitNode);
