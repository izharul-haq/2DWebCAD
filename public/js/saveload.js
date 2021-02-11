// This .js file is used to define every function
// that will be used save and load file

function save() {
    var fileName = "geometry.json";
    var fileContent = {
        "type": geo.type,
        "coorData": geo.coorData,
        "indexData": geo.indexData,
        "colorData": geo.colorData
    };
    var fileBlob = new Blob([JSON.stringify(fileContent)], {type:'application/json'});

    window.URL = window.URL;

    var link = document.getElementById("download");
    link.setAttribute('href', window.URL.createObjectURL(fileBlob));
    link.setAttribute('download', fileName);
}

// TODO
function load() {
    
}