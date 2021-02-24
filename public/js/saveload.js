// This .js file is used to define every function
// that will be used save and load file

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