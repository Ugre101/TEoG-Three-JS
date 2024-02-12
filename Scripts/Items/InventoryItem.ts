export class InventoryItem {
    public name: string;
    public amount: number;
    constructor(name: string, amount: number = 1) {
        this.name = name;
        this.amount = amount;
    }
}

