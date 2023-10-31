export class BodyStats {
    constructor(muscle, fat, height) {
        this.muscle = muscle;
        this.fat = fat;
        this.height = height;
    }
    get muscleWeight() {
        return this.height * (this.muscle / 200);
    }
    get fatWeight() {
        return this.height * (this.fat / 200);
    }
    get weight() {
        return this.muscleWeight + this.fatWeight + this.height * 0.2;
    }
    burnFat(intensity) {}
    buildMuscle(intensity) {}
    gainFat(kcal) {}
}
