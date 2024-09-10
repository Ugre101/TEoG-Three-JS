import { Dialogue, DialogueNode } from "../Dialogue/Dialogue";
import { Npc } from "./Npc";


const introNode = new DialogueNode("intro", "Hello, I am the intro npc. I will give you a quest to kill bandits");
const introNpcDialogue = new Dialogue("Intro Npc", introNode);

const killBanditsNpc = new Npc("Kill Bandits","Kill bandits to get rewards", introNpcDialogue);