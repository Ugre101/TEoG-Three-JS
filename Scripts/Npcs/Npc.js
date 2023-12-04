export class Npc{
    constructor(name,description,dialogue){
        this.name = name;
        this.description = description;
        this.dialogue = dialogue;
    }
    talk(){
        console.log(this.dialogue);
    }
}