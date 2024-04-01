import { Character } from "./Character";

export enum Genders {
    Doll = "Doll",
    Male = "Male",
    Female = "Female",
    Futanari = "Futanari",
    Dickgirl = "Dickgirl",
    Cuntboy = "Cuntboy",
    Malefuta = "Malefuta"
};

export function CheckGender(character: Character): Genders {
    const hasDick = character.Dicks.has();
    const hasBalls = character.Balls.has();
    const hasBreasts = character.Boobs.has();
    const hasPussy = character.Vaginas.has();

    if (hasDick) {
        if (hasPussy){
            return hasBreasts ? Genders.Futanari : Genders.Malefuta;
        }
        return hasBreasts ? Genders.Dickgirl : Genders.Male;
    }
    if (hasPussy) {
        return hasBreasts ? Genders.Female : Genders.Cuntboy;
    }
    return Genders.Doll;
}
export const FemGenders = [Genders.Dickgirl,Genders.Female,Genders.Futanari];
export const MascGenders = [Genders.Male,Genders.Doll,Genders.Malefuta, Genders.Cuntboy];


export function  IsFeminine(char: Character): boolean{
    let gender = CheckGender(char);
    return FemGenders.includes(gender);
}