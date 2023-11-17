import {exp} from "three/nodes";

export class Morphs {
    static Muscle = "Muscle";
    static Fat = "Fat";
    static HeavyBreasts = "HeavyBreasts";
    static Thin = "Thin";

    constructor(key, value, mesh) {
        this.key = key;
        this.meshAndKey = [{mesh: mesh, key: value}];
    }
}

export class AvatarMorphs {

    constructor() {
        this.morphs = [];
    }

    foundMorph(key, value, morph) {
        let found = this.tryGetMorphs(key);
        if (found) {
            found.meshAndKey.push({mesh: morph, key: value});
        } else {
            this.morphs.push(new Morphs(key, {mesh: morph, key: value}));
        }
    }

    tryGetMorphs(key) {
        return this.morphs.find(m => m.key === key);
    }

    tryChangeMorph(key, value) {
        let found = this.tryGetMorphs(key);
        if (!found) {
            return;
        }
        found.meshAndKey.forEach(m => {
            if (m.mesh !== undefined && m.mesh !== null) {
                m.mesh.morphTargetInfluences[m.key] = value;
            }
        });
    }

}