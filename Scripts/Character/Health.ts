export class Health {
    public max: number;
    public current: number;
    constructor(maxHealth: number) {
        this.max = maxHealth;
        this.current = maxHealth;
    }

    /**
     * @returns {boolean} is defeated
     */
    damage(damageAmount: number): boolean {
        this.current -= damageAmount;
        return this.current <= 0;
    }

    heal(healAmount: number) {
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
