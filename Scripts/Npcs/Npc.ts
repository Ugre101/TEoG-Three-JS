import { Dialogue } from "../Dialogue/Dialogue";

export class Npc{
    public name: string;
    public description: string;
    public dialogue: Dialogue;

    constructor(name: string,description: string,dialogue: Dialogue){
        this.name = name;
        this.description = description;
        this.dialogue = dialogue;
    }
    talk(){
        console.log(this.dialogue);
    }
}