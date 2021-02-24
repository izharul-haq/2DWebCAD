// This .js file is used to define every function
// that will be used by popup window with id
// help-popup

function clearTextArea() {
    var infoContainer = document.getElementsByClassName("tab-info")[0];
    var textArea = document.getElementsByClassName("text-info")[0];

    infoContainer.style.backgroundColor = "#FFFFFF";
    textArea.innerHTML = "";
}

function viewHelp(tab) {
    var infoContainer = document.getElementsByClassName("tab-info")[0];
    var textArea = document.getElementsByClassName("text-info")[0];

    infoContainer.style.backgroundColor = "#DDDDDD";

    var info = "";
    if (tab == "preface") {
        info =
            'This web is built with assumption that for each form, the input given ' +
            'will always be "correct". Meaning, every input will always follow format given.' +
            '\n' + '\n' + '\n' +
            'Lastly, sorry for bad english.';
    } else if (tab == "draw") {
        info =
            'TYPE\n' +
            'TYPE refer to the first row input that asks you what kind of geometry will you draw. There are three types available:\n' +
            '1. Straight Line\n' +
            '2. Square (Quadilateral)\n' +
            '3. Polygon\n' +
            '\n' + '\n' +
            'INPUT\n' +
            'INPUT refer to the second row inputs that ask you necessary info about your geometry.\n' +
            '\n' +
            'If you choose to draw line, please input two points following this format:\n' +
            'Point 1, Point 2: x,y with x and y within range [-1,1]*\n' +
            '\n' +
            'If you choose to draw square, please input scale (length of square\'s side) and initial point (top-left point) following this format:\n' +
            'scale: any float number\n' +
            'initial point: x,y with x and y within range [-1,1]*\n' +
            '\n' +
            'If you choose to draw polygon, please input coordinates following this format:\n' +
            'Coordinates: x0,y0 x1,y1 x2,y2 etc. with x and y within range [-1,1]*\n' +
            '\n' + '\n' +
            'COLOR\n' +
            'COLOR refer to the third row input that asks you about color of your geometry. Please input color following this format:\n' +
            'Colors: R,G,B,a with R,G,B within range [0,255] and a within range [0,1]\n' +
            '\n' + '\n' +
            'NOTE:\n' +
            '*: While it\'s okay to input any number outside range [-1,1], a portion or whole of your geometry might not be shown.';
    } else if (tab == "change") {
        info =
            'SCALE\n' +
            'SCALE refer to the first row input that asks you about scaling factor and central point of dilation for your geometry. Please input scale following this format:\n' +
            'Scaling factor: any float number\n' +
            'Central point: x,y with x and y within range [-1,1]*\n' +
            '\n' + '\n' +
            'COLOR\n' +
            'COLOR refer to the second row input that asks you about color of your geometry. Please input color following this format:\n' +
            'Colors: R,G,B,a with R,G,B within range [0,255] and a within range [0,1]';
    }

    textArea.innerHTML = info;
}