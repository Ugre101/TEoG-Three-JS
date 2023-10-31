class Perk {
    constructor(name, description, cost, type, onApply, onRemove) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.type = type;
        this.onApply = onApply;
        this.onRemove = onRemove;
    }
    apply(Character) {
        this.onApply(Character);
    }
    remove(Character) {
        this.onRemove(Character);
    }
}

class EssenceDrainPerk extends Perk {
    constructor(name,description,cost,type){
       super(name,description,cost,type,this.onApply,this.onRemove); 
    }

    onApply(Character){
        Character.EssenceDrain.addDrainMod(new Mod(10, this.name));
    }

    onRemove(Character){
        Character.EssenceDrain.removeDrainMod(this.name);
    }
}



