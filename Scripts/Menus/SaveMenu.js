
const saveMenu = document.getElementById("SaveMenu");
const close = document.getElementById("SaveBack");
close.addEventListener("click", function () {
    saveMenu.style.display = "none";
});

const openSaveMenu = document.getElementById("OpenSaveMenu");
openSaveMenu.addEventListener("click", function () {
    saveMenu.style.display = "block";
    ShowSaves();
});

function ShowSaves(){

}

import { Player } from "../Player.js";

const saveToFile = document.getElementById("SaveToFile");
saveToFile.addEventListener("click", function () {
    // Save player to textfile
    let save = JSON.stringify(Player);
    console.log(save);
    let fs = require('fs');
    fs.writeFile('TEoGsave.txt', save, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });

});
const LoadFromFile = document.getElementById("LoadFromFile");
LoadFromFile.addEventListener("click", function () {
    // Load player from textfile
    fileInput.style.display = "block";
});
const fileInput = document.getElementById("fileInput");
fileInput.onchange = e => {
    // getting a hold of the file reference
    let file = e.target.files[0];

    // setting up the reader
    let fs = require('fs');
    fs.readFile(file, 'utf-8', function (err, data) {
        if (err) throw err;
        let player = JSON.parse(data);
        console.log(player);
        Player = player;
    });
    fileInput.style.display = "none";
}