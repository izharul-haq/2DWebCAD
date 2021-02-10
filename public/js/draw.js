// This .js file is used to define every function
// that will be used by popup window with id
// draw-popup

import {draw} from './gl.js';

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

function isFilled(typeValue, input1Value, input2Value, colorValue) {
    if (typeValue == "") {
        return false;
    }
    else if (typeValue == "line" || typeValue == "square") {
        return (input1Value != "" && input2Value != "" && colorValue != "");
    }
    else { // typeValue == "polygon"
        return (input1Value != "" && colorValue != "");
    }

}

function parseCoorInput(textInput) {
    // Parse text input into an array
    // suitable to be used by webgl
    
    var input = textInput.split(" ");
    var inputArray = [];
    for (var i of input) {
        var inputTemp = i.split(",");
        for (var j of inputTemp) {
            inputArray.push(parseFloat(j));
        }
    }

    return inputArray;
}

function parseColorInput(textInput) {
    var inputArray = [];
    var input = textInput.split(",");
        for (var j = 0; j < input.length; j++) {
            var k = parseFloat(input[j]);
            if (j == 3) {
                inputArray.push(k);
            }
            else {
                inputArray.push(k / 255);
            }
        }

    return inputArray;
}

window.drawInput = function drawInput() {
    const typeInput = document.querySelector('input[name="drawtype"]:checked');
    var typeValue = typeInput ? typeInput.value : "";

    var input1, input2;
    if (typeValue == 'line') {
        input1 = document.getElementById('P1');
        input2 = document.getElementById('P2');
    }
    else if (typeValue == 'square') {
        input1 = document.getElementById('scale');
        input2 = document.getElementById('P0');
    }
    else if (typeValue == 'polygon') {
        input1 = document.getElementById('coor');
    }
    
    var input1Value = input1 ? input1.value : "";
    var input2Value = input2 ? input2.value : "";

    const colorInput = document.getElementById('color');
    var colorValue = colorInput.value;
    
    const canvas = document.querySelector('canvas');

    if (isFilled(typeValue, input1Value, input2Value, colorValue)) {
        warning("", "none");
        var input1Data = parseCoorInput(input1Value);
        var input2Data = parseCoorInput(input2Value);
        var colorData = parseColorInput(colorValue);
        draw(canvas, typeValue, input1Data, input2Data, colorData);
        hidePopUpWindow("draw");
    }
    else {
        var msg = "Warning: Fill every input first"
        warning(msg, "block");
    }
}

window.clearDrawForm = function clearDrawForm() {
    const typeInput = document.querySelector('input[name="drawtype"]:checked');
    var typeValue = typeInput ? typeInput.value : "";
    typeInput.checked = false;

    var input1, input2;
    if (typeValue == 'line') {
        input1 = document.getElementById('P1');
        input2 = document.getElementById('P2');
    }
    else if (typeValue == 'square') {
        input1 = document.getElementById('scale');
        input2 = document.getElementById('P0');
    }
    else if (typeValue == 'polygon') {
        input1 = document.getElementById('coor');
    }
    
    try {
        input1.value = "";
        input2.value = "";
    }
    catch(err) {

    }

    const colorInput = document.getElementById('color');
    colorInput.value = "";
}