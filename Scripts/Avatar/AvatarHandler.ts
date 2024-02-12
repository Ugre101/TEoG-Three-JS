import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {CheckGender, FemGenders, Genders, IsFeminine, MascGenders} from "../Character/Genders";
import {Race} from "../Character/RaceSystem";
import * as THREE from "three";
import { Character } from "../Character/Character";

export class Avatar{
    public race: Race;
    public gender: Genders;
    public path: string;
    constructor(race: Race,gender: Genders,path: string) {
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
            if (!n.isMesh) {
                return;
            }
            n.castShadow = true;
            n.receiveShadow = true;
            if (n.material.map) {
                n.material.vertexColors = false;
                n.material.map.anisotropy = 16;
                n.material.map.minFilter = THREE.LinearFilter;
                n.material.map.maxFilter = THREE.LinearFilter;
            }
        });
  

        return res.scene;

    }
}


class AvatarHandler{
    public default: Avatar = new Avatar(Race.Humanoid,Genders.Doll,"/Resources/Characters/Doll.glb");
    public avatars: Avatar[];
    constructor(avatars: Avatar[]) {
        this.avatars = avatars;
    }

    getAvatar(character: Character): Avatar{
        const race = character.RaceSystem.Race;
        const gender = CheckGender(character);
        let bestMatches = this.avatars.filter(a => a.race === race);
        if (bestMatches.length <= 0) {
            return this.default;
        }
        if (bestMatches.length === 1) {
            return bestMatches[0];
        } 
        let bestGenderMatches = bestMatches.filter(a => a.gender === gender);
        if (bestGenderMatches.length === 1) {
            return bestGenderMatches[0];
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

import humanUrl from '/Resources/Characters/HumanFemaleFuta.glb?url';

export const AvatarManager = new AvatarHandler([new Avatar(Race.Human,Genders.Futanari, humanUrl)]);

