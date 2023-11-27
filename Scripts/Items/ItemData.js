export class ItemData {
    /**
     *
     * @param {string} name
     * @param {string} description
     * @param {function(Character)} onUse
     */
    constructor(name, description, onUse) {
        this.name = name;
        this.description = description;
        this.onUse = onUse;
    }
}