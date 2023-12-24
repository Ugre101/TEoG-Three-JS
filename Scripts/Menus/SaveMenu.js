import { Menu, MenuManagerInstance } from "../Menu.js";
import { Save } from "../Save.js";
import {LoadPlayer, Player} from "../Player.js";
import { DormManagerInstance } from "../Dorm/DormManager.js";
import { BuildingsManagerInstance } from "../Dorm/DormBuildings/BuildingsManager.js";

const saveMenu = new Menu("SaveMenu");
const close = document.getElementById("SaveBack");
close.addEventListener("click", function () {
    MenuManagerInstance.close();
});

const openSaveMenuBtn = document.getElementById("OpenSaveMenu");
openSaveMenuBtn.addEventListener("click", function () {
    OpenSaveMenu();
});

export function OpenSaveMenu() {
    MenuManagerInstance.open(saveMenu);
    ShowSaves();
}
function saveOrLoad(id) {
    let hasSave = localStorage.getItem("TEoGsave" + id);
    if (hasSave) {
        let save = JSON.parse(hasSave);
        LoadPlayer(save.player);
        MenuManagerInstance.close();
        return;
    }
    let save = JSON.stringify(new Save(
        Player, 
        new Date(),
        DormManagerInstance.dormMates,
        BuildingsManagerInstance.saveBuildings(),
        ));
    console.log(save);
    localStorage.setItem("TEoGsave" + id, save);
    ShowSaves();
}
function clearSave(id) {
    if (!confirm("Are you sure you want to delete this save?")) {
        return;
    }
    localStorage.removeItem("TEoGsave" + id);
    ShowSaves();
}
function overWriteSave(id){
    if (!confirm("Are you sure you want to overwrite this save?")) {
        return;
    }
    let save = JSON.stringify(new Save(Player, new Date()));
    localStorage.setItem("TEoGsave" + id, save);
    ShowSaves();
}

class SaveBtn {
    constructor(id) {
        this.id = id;
        this.saveBtn = document.getElementById("Save" + id);
        this.clearSaveBtn = document.getElementById("ClearSave" + id);
        this.overwriteSave = document.getElementById("OverwriteSave" + id);
        this.saveBtn.addEventListener("click", () => saveOrLoad(id));
        this.clearSaveBtn.addEventListener("click", () => clearSave(id));
        this.overwriteSave.addEventListener("click", () => overWriteSave(id));
    }
    showSave() {
        let save = localStorage.getItem("TEoGsave" + this.id);

        if (save) {
            this.saveBtn.style.display = "block";
            let date = new Date(JSON.parse(save).date);
            this.saveBtn.innerHTML = `Load ${this.id} ${date.toLocaleString()}`;
            this.clearSaveBtn.style.display = "block";
            this.overwriteSave.style.display = "block";
        } else {
            this.saveBtn.style.display = "block";
            this.saveBtn.innerHTML = "Save " + this.id;
            this.clearSaveBtn.style.display = "none";
            this.overwriteSave.style.display = "none";
        }
    }
}

const saves = [
    new SaveBtn(1),
    new SaveBtn(2),
    new SaveBtn(3),
    new SaveBtn(4),
    new SaveBtn(5),
];

function ShowSaves() {
    saves.forEach((save) => {
        save.showSave();
    });
}

const saveToFile = document.getElementById("SaveToFile");
saveToFile.addEventListener("click", function () {
    // Save player to textfile
    let save = JSON.stringify(new Save(Player, new Date()));
    let blob = new Blob([save], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = "TEoG_save.json";
    link.click();
});
const fileInput = document.getElementById("fileInput");
fileInput.onchange = (e) => {
    // getting a hold of the file reference
    let file = e.target.files[0];
    // setting up the reader
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    // here we tell the reader what to do when it's done reading...
    reader.onload = (readerEvent) => {
        let content = readerEvent.target.result; // this is the content!
        let save = JSON.parse(content);
        LoadPlayer(save.player);
        DormManagerInstance.load(save.dormMates);
        BuildingsManagerInstance.loadBuildings(save.dormBuildings);
        MenuManagerInstance.close();
    };
};
