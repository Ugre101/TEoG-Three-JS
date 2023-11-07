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
    let hasDick = character.Dicks.List.length > 0;
    let hasBreasts = character.Boobs.List.length > 0;
    if (hasDick) {
        if (hasBreasts) return Genders.Dickgirl;
        return Genders.Male;
    }
    if (hasBreasts) {
        return Genders.Female;
    }
    return Genders.Doll;
}
export const FemGenders = [Genders.Dickgirl,Genders.Female,Genders.Futanari];
export const MascGenders = [Genders.Male,Genders.Doll,Genders.Malefuta, Genders.Cuntboy];

/**
 *
 * @param {Character} char
 * @returns {boolean} true is feminine or false if masculine
 * @constructor
 */
export function  IsFeminine(char){
    let gender = CheckGender(char);
    return FemGenders.includes(gender);
}