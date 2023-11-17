export class BattleAvatar{
    constructor(isPlayer, scene){
        this.scene = scene;
        let temp = isPlayer ? "player" : "enemy";
        this.hp = document.getElementById(temp + "HP");
        this.hpBar = document.getElementById(temp + "HPBar");
        this.hpBar.style.backgroundColor = "lime";
        this.wp = document.getElementById(temp + "WP");
        this.wpBar = document.getElementById(temp + "WPBar");
    }

    updateHp(hp, maxHp){
        this.hp.innerHTML = hp + "/" + maxHp;
        let percent = hp / maxHp;
        let color = () => {
            let r = percent < 0.5 ? 255 : Math.round(255 - (percent - 0.5) * 2 * 255);
            let g = percent > 0.5 ? 255 : Math.round(percent * 2 * 255);
            return "rgb(" + r + "," + g + ",0)";
        };
        
        this.hpBar.style.width = percent * 100 + "%";
        this.hpBar.style.backgroundColor = color();
    }

    updateWp(wp, maxWp){
        this.wp.innerHTML = wp + "/" + maxWp;
        this.wpBar.style.width = (wp / maxWp) * 100 + "%";
    }

}