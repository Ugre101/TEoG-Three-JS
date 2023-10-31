export class Menu{
    constructor(id){
        this.obj = document.getElementById(id);
    }
    open(){
        this.obj.style.display = 'block';
    }
    close(){
        this.obj.style.display = 'none';
    }
}

class MenuManager{
    constructor(){
        this.currentMenu = null;
        this.isOpen = false;
    }
    open(menu){
        if (this.isOpen)
            this.currentMenu.close();
        this.currentMenu = menu;
        this.isOpen = true;
        this.currentMenu.open();
    }
    close(){
        this.currentMenu.close();
        this.isOpen = false;
    }
}

export const MenuManagerInstance = new MenuManager();
