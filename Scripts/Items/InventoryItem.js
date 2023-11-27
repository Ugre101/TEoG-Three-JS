export class InventoryItem {
    /**
     *
     * @param {string} name
     * @param {number} amount
     */
    constructor(name, amount = 1) {
        this.name = name;
        this.amount = amount;
    }
}

