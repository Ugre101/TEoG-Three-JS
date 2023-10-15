import { Dicks } from "./Dicks";

class Age {
    constructor(age) {
        this.dayOld = age * 365;
    }
    /// Returns true if the age has changed
    tickDay(days = 1){
        let was = this.age;
        this.dayOld += days;
        return this.age > was; 
    }
    get age() {
        return Math.floor(this.dayOld / 365);
    }
    isAdult() {
        return this.age >= 18;
    }
    isTeenager() {
        return this.age >= 13 && this.age < 18;
    }
    isChild() {
        return this.age < 13;
    }
}

class Essence{
    constructor(startingEssence){
        this.essence = startingEssence;
    }
    spendEssence(essenceCost){
        if(this.essence < essenceCost){
            return false;
        }
        this.essence -= essenceCost;
        return true;
    }
    gainEssence(essenceGain){
        this.essence += essenceGain;
    }
}

class Health {
    constructor(maxHealth) {
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
    }
    damage(damageAmount) {
        this.currentHealth -= damageAmount;
    }
    heal(healAmount) {
        this.currentHealth += healAmount;
    }
    isAlive() {
        return this.currentHealth > 0;
    }
    restore() {
        this.currentHealth = this.maxHealth;
    }
}

class LevelSystem {
    constructor(){
        this.level = 1;
        this.exp = 0;
        this.statPoints = 0;
        this.perkPoints = 0;
    }
    neededExp(){
        return 100 * this.level;
    }
    gainExp(exp){
        this.exp += exp;
        while(this.exp >= this.neededExp()){
            this.exp -= this.neededExp();
            this.levelUp();
        }
    }
    levelUp(){
        this.level++;
        this.statPoints += 5;
        this.perkPoints += 1;
    }
    useStatPoint(){
        if(this.statPoints > 0){
            this.statPoints--;
            return true;
        }
        return false;
    }
    usePerkPoint(cost = 1){
        if(this.perkPoints >= cost){
            this.perkPoints -= cost;
            return true;
        }
        return false;
    }
}

const genders = {
    Doll: "Doll",
    Male: "Male",
    Female: "Female",
}

function CheckGender(Character){
    if (true)
        return genders.Doll;
}


class Character {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = new Age(18);
        this.Health = new Health(100);
        this.Dicks = new Dicks();
        this.LevelSystem = new LevelSystem();
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
}


const player = new Character();
export { player };
