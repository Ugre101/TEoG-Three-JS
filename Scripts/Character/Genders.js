import { Character } from "./Character";
/**
 * @enum {string} Genders
 */
export const Genders = {
    Doll: "Doll",
    Male: "Male",
    Female: "Female",
    Futanari: "Futanari",
    Dickgirl: "Dickgirl",
    Cuntboy: "Cuntboy",
    Malefuta: "Malefuta"
};


/**
 *
 * @param {Character} character
 * @returns {string} gender
 */
export function CheckGender(character) {
    const hasDick = character.Dicks.List.length > 0;
    const hasBreasts = character.Boobs.List.length > 0;
    const hasPussy = false;

    if (hasDick) {
        if (hasPussy){
            return hasBreasts ? Genders.Futanari : Genders.Malefuta;
        }
        return hasBreasts ? Genders.Dickgirl : Genders.Male;
    }
    if (hasBreasts) {
        return Genders.Female;
    }
    if (hasPussy)
        return Genders.Cuntboy;
    return Genders.Doll;
}
export const FemGenders = [Genders.Dickgirl,Genders.Female,Genders.Futanari];
export const MascGenders = [Genders.Male,Genders.Doll,Genders.Malefuta, Genders.Cuntboy];

/**
 * @param {Character} char
 * @returns {boolean} true is feminine or false if masculine
 */
export function  IsFeminine(char){
    let gender = CheckGender(char);
    return FemGenders.includes(gender);
}