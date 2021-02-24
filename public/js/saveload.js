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
    var fileBlob = new Blob([JSON.stringify(fileContent)], { type: 'application/json' });

    window.URL = window.URL;

    var link = document.getElementById("download");
    link.setAttribute('href', window.URL.createObjectURL(fileBlob));
    link.setAttribute('download', fileName);
}

// TODO
function load() {
    // Create XMLHttpRequest object
    // var req = new XMLHttpRequest();

    // req.onreadystatechange = reportStatus;
    // req.open("GET","./geometry.json",true);
    // req.send();

    // funtion reportStatus(){
    //     if (req.readyState == 4){
    //         var mydata = JSON.parse(req)
    //     }
    // }
    // $.getJSON("./geometry.json")
    //     .done(funtion(data) {
    //         var mydata = JSON.parse(data);
    //         geo.type = data[0].type;
    //         geo.coorData = data[0].coorData;
    //         geo.indexData = data[0].indexData;
    //         geo.colorData = data[0].colorData;
    //     })
}