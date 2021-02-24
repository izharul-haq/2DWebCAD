// This .js file is used to define every function
// that will be used save and load file

import { drawGeo } from "./gl";

window.save = function save() {
    var fileName = "geometry.json";
    var fileContent = {
        "type": geo.type,
        "coorData": geo.coorData,
        "indexData": geo.indexData,
        "colorData": geo.colorData
    };
    var fileBlob = new Blob([JSON.stringify(fileContent, null, 2)], { type: 'application/json' });

    window.URL = window.URL;

    var link = document.getElementById("download");
    link.setAttribute('href', window.URL.createObjectURL(fileBlob));
    link.setAttribute('download', fileName);
}

// TODO
function readFile(input) {
    // follow tutorial in this link:
    // https://javascript.info/file
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        var mydata = JSON.parse(file);
        var canvas = document.querySelector('canvas');
        geo.type = mydata[0].type;
        geo.coorData = mydata[0].coorData;
        geo.indexData = mydata[0].indexData;
        geo.colorData = mydata[0].colorData;
        drawGeo(canvas, geo.type, geo.coorData, geo.indexData, geo.colorData);
    };

    reader.onerror = function() {
        alert("Cannot load the file");
    };
    /* 
    Steps:
        1. Read file as text
        2. Parse text as JSON
        3. Draw using drawGeo (in ../gl.js) function, for
           example using drawGeo see changeColor function
           in change.js
    */
}

window.load = function load() {
    var load_file = document.getElementById('load-file');
    load_file.click();
}