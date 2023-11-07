class Perk {
    constructor(name, description, cost, type) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.type = type;
    }

}

class EssenceDrainPerk extends Perk {
    constructor(name,description,cost,type){
       super(name,description,cost,type);
    }

    onApply(Character){
        Character.EssenceDrain.addDrainMod(new Mod(10, this.name));
    }

    onRemove(Character){
        Character.EssenceDrain.removeDrainMod(this.name);
    }
}



