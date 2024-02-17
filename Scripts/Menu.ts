import { InDialogue } from "./Dialogue/DialogueMenu";

export class Menu{
    private obj: HTMLElement;
    constructor(id: string){
        this.obj = document.getElementById(id)!;
    }
    open(){
        this.obj.style.display = 'block';
    }
    close(){
        this.obj.style.display = 'none';
    }
}

class MenuManager{
    private currentMenu: Menu | null;
    public isOpen: boolean;
    constructor(){
        this.currentMenu = null;
        this.isOpen = false;
    }
    open(menu: Menu){

        if (InDialogue()){
            return false;
        }

        if (this.isOpen && this.currentMenu)
            this.currentMenu.close();
        this.currentMenu = menu;
        this.isOpen = true;
        this.currentMenu.open();
        return true;
    }
    close(){
        if (this.isOpen && this.currentMenu)
        this.currentMenu.close();
        this.isOpen = false;
    }
}

export const MenuManagerInstance = new MenuManager();
