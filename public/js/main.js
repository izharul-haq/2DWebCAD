// This .js file is used to define every function
// that will be used by pop-up container, especially
// pop-up with id main-popup.

import {draw} from './gl.js';

/* HTML POP-UP FUNCTIONS */
window.closePopUpWindow = function closePopUpWindow(elmtIndex) {
    var popUpWindows = document.getElementsByClassName('popup-container');
    var activePopUpWindow = popUpWindows[elmtIndex];
    activePopUpWindow.style.display = "none";
}

window.showHelp = function showHelp(helpButtonIndex) {
    var helpButtons = document.getElementsByClassName('help-button');
    var activeHelpButton = helpButtons[helpButtonIndex];
    var helpTexts = document.getElementsByClassName('help-text');
    var activeHelpText = helpTexts[helpButtonIndex];

    if (activeHelpText.style.display == "" || activeHelpText.style.display == "none") {
        activeHelpText.style.display = "block";
        activeHelpButton.style.backgroundColor = "#F26CA7";
        activeHelpButton.style.color = "#FFFFFF";
    }
    else if (activeHelpText.style.display == "block") {
        activeHelpText.style.display = "none";
        activeHelpButton.style.backgroundColor = "#FFFFFF";
        activeHelpButton.style.color = "#F26CA7";
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
    const coorInput = document.querySelector('input[name="coor"]');
    const colorInput = document.querySelector('input[name="color"]');
    const canvas = document.querySelector('canvas');

    var typeValue = typeInput ? typeInput.value : "";
    var coorValue = coorInput.value;
    var colorValue = colorInput.value;

    if (typeValue == "" || coorValue == "" || colorValue == "") {
        var msg = "Warning: Fill every input first"
        warning(msg, "block");
    }
    else {
        var coorData = parseTextInput(coorValue);
        var colorData = parseTextInput(colorValue);
        draw(canvas, typeValue, coorValue, colorValue);   
    }
}