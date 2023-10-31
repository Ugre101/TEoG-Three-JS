class BattleAvatar{
    constructor(isPlayer, scene){
        this.scene = scene;
        let temp = isPlayer ? "player" : "enemy";
        this.hp = document.getElementById(temp + "HP");
        this.hpBar = document.getElementById(temp + "HPBar");
        this.wp = document.getElementById(temp + "WP");
        this.wpBar = document.getElementById(temp + "WPBar");
    }

    updateHp(hp, maxHp){
        this.hp.innerHTML = hp + "/" + maxHp;
        this.hpBar.style.width = (hp / maxHp) * 100 + "%";
    }

    updateWp(wp, maxWp){
        this.wp.innerHTML = wp + "/" + maxWp;
        this.wpBar.style.width = (wp / maxWp) * 100 + "%";
    }

}