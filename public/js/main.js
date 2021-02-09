// This .js file is used to define every function
// that will be used by pop-up container, especially
// pop-up with id main-popup.

import {draw} from './gl.js';

/* HTML POP-UP FUNCTIONS */
window.hidePopUpWindow = function hidePopUpWindow(window) {
    var popUpWindow = document.getElementById(window + "-popup");
    popUpWindow.style.display = "none";
}

window.showPopUpWindow = function showPopUpWindow(window) {
    var popUpWindow = document.getElementById(window + "-popup");
    popUpWindow.style.display = "block";
}

window.showInputForm = function showInputForm(type) {
    var lineForm = document.getElementById("line-input");
    var squareForm = document.getElementById("square-input");
    var polygonForm = document.getElementById("polygon-input");

    lineForm.style.display = "none";
    squareForm.style.display = "none";
    polygonForm.style.display = "none";

    if (type == "line") {
        lineForm.style.display = "table";
    }
    else if (type == "square") {
        squareForm.style.display = "table";
    }
    else {
        polygonForm.style.display = "table";
    }
}

window.warning = function warning(msg, display) {
    var warning_text = document.getElementById("warning-text");
    warning_text.innerHTML = msg;
    warning_text.style.display = display;
}

function parseTextInput(textInput) {
    // Parse text input into an array
    // suitable to be used by webgl
    
    var input = textInput.split(" ");
    var inputArray = [];
    for (var i of input) {
        var inputTemp = i.split(",");
        for (var j of inputTemp) {
            inputArray.push(parseFloat(j));
        }
        if (inputTemp.length == 2) {
            inputArray.push(0);
        }
    }

    return inputArray;
}

window.drawInput = function drawInput() {
    const typeInput = document.querySelector('input[name="drawtype"]:checked');
    var typeValue = typeInput ? typeInput.value : "";

    var input1, input2;
    var input1Value, input2Value;
    if (typeValue == 'line') {
        input1 = document.getElementById('P1');
        input2 = document.getElementById('P2');

        input1Value = input1.value;
        input2Value = input2.value;
    }
    else if (typeValue == 'square') {
        input1 = document.getElementById('scale');
        input2 = document.getElementById('P0');

        input1Value = input1.value;
        input2Value = input2.value;
    }
    else if (typeValue == 'polygon') {
        input1 = document.getElementById('coor');
        
        input1Value = input1.value;
        input2Value = "None";
    }
    else {
        input1Value = "";
        input2Value = "";
    }

    const colorInput = document.getElementById('color-input');
    var colorValue = colorInput.value;
    
    const canvas = document.querySelector('canvas');

    if (typeValue == "" || input1Value == "" || input2Value == "" || colorValue == "") {
        var msg = "Warning: Fill every input first"
        warning(msg, "block");
    }
    else {
        warning("", "none");
    }
}