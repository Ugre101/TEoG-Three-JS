export class BattleAvatar{
    public scene: any;
    private hp: HTMLElement;
    private hpBar: HTMLElement;
    private wp: HTMLElement;
    private wpBar: HTMLElement;
    constructor(isPlayer: boolean, scene: any){
        this.scene = scene;
        let temp = isPlayer ? "player" : "enemy";
        this.hp = document.getElementById(temp + "HP")!;
        this.hpBar = document.getElementById(temp + "HPBar")!;
        this.hpBar.style.backgroundColor = "lime";
        this.wp = document.getElementById(temp + "WP")!;
        this.wpBar = document.getElementById(temp + "WPBar")!;
    }

    updateHp(hp: number, maxHp: number){
        this.hp.innerHTML = `${Math.round(hp)}/${maxHp}`;
        let percent = hp / maxHp;
        let color = () => {
            let r = percent < 0.5 ? 255 : Math.round(255 - (percent - 0.5) * 2 * 255);
            let g = percent > 0.5 ? 255 : Math.round(percent * 2 * 255);
            return `rgb(${r},${g},0)`;
        };
        
        this.hpBar.style.width = `${percent * 100}%`;
        this.hpBar.style.backgroundColor = color();
    }

    updateWp(wp: number, maxWp: number){
        this.wp.innerHTML = `${wp}/${maxWp}`;
        this.wpBar.style.width = `${(wp / maxWp) * 100}%`;
    }

}