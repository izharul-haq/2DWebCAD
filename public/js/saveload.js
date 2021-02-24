// This .js file is used to define every function
// that will be used save and load file

import { drawGeo } from "./gl.js";

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

window.load = function load() {
    var load_file = document.getElementById('load-file');
    load_file.click();
}

// TODO
window.readFile = function readFile(input) {
    var file = input.files[0];

    var reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        var txtFile = reader.result;
        var mydata = JSON.parse(txtFile);
        var canvas = document.querySelector('canvas');
        geo.setType(mydata.type);
        geo.setCoorData(mydata.coorData);
        geo.setIndexData(mydata.indexData);
        geo.setColorData(mydata.colorData);
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