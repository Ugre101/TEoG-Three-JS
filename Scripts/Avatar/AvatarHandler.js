import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {CheckGender, FemGenders, Genders, IsFeminine, MascGenders} from "../Genders";
import {Race} from "../RaceSystem";
import * as THREE from "three";

class Avatar{
    /**
     *
     * @param {Race} race
     * @param gender
     * @param path
     */
    constructor(race,gender,path) {
        this.race = race;
        this.gender = gender;
        this.path = path;
    }
    async load(){
        const loader = new GLTFLoader();
        let res = await loader.loadAsync(this.path, function (gltf) {
        }, undefined, function (error) {
            console.error(error);
            return null;
        });
        res.scene.traverse(n => {
            if (n.isMesh) {
                n.castShadow = true;
                n.receiveShadow = true;
                if (n.material.map) {
                    n.material.vertexColors = false;
                    n.material.map.anisotropy = 16;
                    n.material.map.minFilter = THREE.LinearFilter;
                    n.material.map.maxFilter = THREE.LinearFilter;
                }

            }
        });
        return res.scene;

    }
}

class AvatarHandler{
    constructor(avatars) {
        this.default = new Avatar(Race.Humanoid,Genders.Doll,"/Resources/Characters/Doll.glb");
        this.avatars = avatars;
    }

    /**
     *
     * @param {Character} character
     * @returns {Avatar} closest avatar to the character
     */
    getAvatar(character){
        const race = character.RaceSystem.Race;
        const gender = CheckGender(character);
        const bestMatches = this.avatars.filter(a => a.race === race);
        if (bestMatches.length <= 0) {
            return this.default;
        }
        if (bestMatches.length === 1) {
            return bestMatches[0];
        } else if (bestMatches.includes(c => c.gender === gender)) {
            return bestMatches.find(c => c.gender === gender);
        }
        const isFem = IsFeminine(character);
        if (isFem) {
            const fems =  bestMatches.filter(a => FemGenders.includes(a.gender));
            if (fems.length > 0)
                return fems[0];
        } else {
            const masc = bestMatches.filter(a => MascGenders.includes(a.gender));
            if (masc.length > 0)
                return masc[0];
        }
        return bestMatches[0];
    }

}

export const AvatarManager = new AvatarHandler([new Avatar(Race.Human,Genders.Futanari,'/Resources/Characters/HumanFemaleFuta.glb')]);

