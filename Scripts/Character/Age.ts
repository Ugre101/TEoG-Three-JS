export class Age {
    public daysOld: number;
    constructor(age: number) {
        this.daysOld = age * 365;
    }
    get age() {
        return Math.floor(this.daysOld / 365);
    }
    /// Returns true if the age has changed
    tickDay(days = 1) {
        let was = this.age;
        this.daysOld += days;
        return this.age > was;
    }
    get yearsOld() {
        return Math.floor(this.daysOld / 365);
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
