import { Character } from "../Player";

class DormManager{
    constructor(){
        this.dorms = [];
    }
    tick(ticks){
        for(var i = 0; i < this.dorms.length; i++){
            this.dorms[i].tick(ticks);
        }
    }
    addDormMate(character){
        if (character instanceof Character){
            this.dorms.push(new DormMate(character));
        } else {
            console.warn("Not a character");
        }
    }
    removeDormMate(index){
        if (index < this.dorms.length)
            return this.dorms.splice(index,1);
    }
}

class DormMate{
    constructor(character){
        this.character = character;
    }
    tick(ticks){

    }
}

export let Dorm = new DormManager();
