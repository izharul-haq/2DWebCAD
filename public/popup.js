/* POP-UP FUNCTIONS */
function closePopUpWindow(elmtIndex) {
    var popUpWindows = document.getElementsByClassName('popup-container');
    var activePopUpWindow = popUpWindows[elmtIndex];
    activePopUpWindow.style.display = "none";
}

function showHelp(helpButtonIndex) {
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

function warning(msg, display) {
    var warning_text = document.getElementById("warning-text");
    warning_text.innerHTML = msg;
    warning_text.style.display = display;
}

function parseTextInput(textInput) {
    var input = textInput.split(" ");
    var inputArray = [];
    for (i of input) {
        var inputTemp = i.split(",");
        for (j of inputTemp) {
            inputArray.push(parseFloat(j));
        }
        if (inputTemp.length == 2) {
            inputArray.push(0);
        }
    }

    return inputArray;
}

function drawInput() {
    var typeRadio = document.querySelector('input[name="drawtype"]:checked');
    var typeValue = typeRadio ? typeRadio.value : "";
    
    var coorInput = document.querySelector('input[name="coor"]');
    var coorValue = coorInput.value;

    var colorInput = document.querySelector('input[name="color"]');
    var colorValue = colorInput.value;

    if (typeValue == "" || coorValue == "" || colorValue == "") {
        var msg = "Warning: Fill every input first"
        warning(msg, "block");
    }
    else {
        var coorData = parseTextInput(coorValue);
        var colorData = parseTextInput(colorValue);
        console.log(coorData);
    }
}