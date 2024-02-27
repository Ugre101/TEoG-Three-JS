import { Menu, MenuManagerInstance } from "../Menu";
import { OpenInventoryMenu } from "./InventoryMenu";
import { OpenLevelMenu } from "./LevelMenu";
import { OpenLooks } from "./LooksMenu";
import { OpenOptions } from "./OptionsMenu";
import { OpenSaveMenu } from "./SaveMenu";

class HotKeyMenuBtn {
    private _hotKey: string;
    private _menu: Function;

    constructor(hotKey: string, Menu: Function) {
        this._hotKey = hotKey;
        this._menu = Menu;
    }

    public get hotKey(): string {
        return this._hotKey;
    }

    press(){
        this._menu();
    }
}

export const HotKeyMenuBtns: HotKeyMenuBtn[] = [
    new HotKeyMenuBtn("i", OpenInventoryMenu),
    new HotKeyMenuBtn("l", OpenLevelMenu),
    new HotKeyMenuBtn("c", OpenLooks),
    new HotKeyMenuBtn("o", OpenOptions),
    new HotKeyMenuBtn("g", OpenSaveMenu)
];