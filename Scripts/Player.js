export class player {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = 18;
        this.Health = new Health(100);
    }
}

class Age {
    constructor(age) {
        this.age = age;
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
        this.essence -= essenceCost;
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