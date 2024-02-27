import * as THREE from "three";

export class Morphs {
    static Muscle = "Muscle";
    static Fat = "Fat";
    static HeavyBreasts = "HeavyBreasts";
    static Thin = "Thin";

    public key: string;
    public meshAndKey: {mesh: THREE.mesh, key: number}[] = [];
    constructor(key: string, value: number, mesh: THREE.mesh) {
        this.key = key;
        this.meshAndKey = [{mesh: mesh, key: value}];
    }
}

export class AvatarMorphs {

    public morphs: Morphs[] = [];

    foundMorph(key: string, value: number, morph: THREE.mesh) {
        let found = this.tryGetMorphs(key);
        if (found) {
            found.meshAndKey.push({mesh: morph, key: value});
        } else {
            this.morphs.push(new Morphs(key, value, morph));
        }
    }

    tryGetMorphs(key: string) {
        return this.morphs.find(m => m.key === key);
    }

    tryChangeMorph(key: string, value: number) {
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