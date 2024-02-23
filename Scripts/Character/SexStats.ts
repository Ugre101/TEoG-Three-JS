import { Stat } from "./Stats";

export class SexStats {
    public Arusal: number = 0;
    public MaxArusal: Stat = new Stat(100);
    public Orgasms: number = 0;

    GainArusal(gain: number) : boolean {
        this.Arusal += gain;
        let didOrgams = false;
        while(this.Arusal >= this.MaxArusal.Value()){
            this.Orgasms++;
            this.Arusal = 0;
            didOrgams = true;
        }
        return didOrgams;
    }

    ResetStats() {
        this.Arusal = 0;
        this.Orgasms = 0;
    }

}