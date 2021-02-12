// This .js file is used to define every function
// that will be used by popup window with id
// change-popup

import {drawGeo} from './gl.js';
import {parseColorInput} from './draw.js';

// TODO
function scale() {
    
}

function changeColor(colorValue) {
    var canvas = document.querySelector('canvas');
    
    var colorData = parseColorInput(colorValue);
    geo.setColorData(colorData);
    
    drawGeo(canvas, geo.type, geo.coorData, geo.indexData, colorData);
}

// TODO
window.changeGeometry = function changeGeometry() {
    var scaleInput = document.getElementById('scale-input');
    var colorInput = document.getElementById("color-form");
    var scaleValue = scaleInput.value;
    var colorValue = colorInput.value;
    if (scaleValue != "") {
        scale();
    }
    
    if (colorValue != "") {
        changeColor(colorValue);
    }

    hidePopUpWindow('change');
}