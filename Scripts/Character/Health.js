export class Health {
    constructor(maxHealth) {
        this.max = maxHealth;
        this.current = maxHealth;
    }

    /**
     *
     * @param {number} damageAmount
     * @returns {boolean} is defeated
     */
    damage(damageAmount) {
        this.current -= damageAmount;
        return this.current <= 0;
    }

    /**
     * @param {number} healAmount
     */
    heal(healAmount) {
        this.current += healAmount;
        if (this.current > this.max) {
            this.current = this.max;
        }
    }
    isAlive() {
        return this.current > 0;
    }
    restore() {
        this.current = this.max;
    }
}
