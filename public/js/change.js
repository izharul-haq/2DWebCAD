// This .js file is used to define every function
// that will be used by popup window with id
// change-popup

// TODO
function scale() {
    
}

// TODO
function changeColor() {

}

// TODO
window.changeGeometry = function changeGeometry() {
    var scaleInput = document.getElementById('scale-input');
    var colorInput = document.getElementById('color-input');

    var scaleValue = scaleInput.value;
    var colorValue = colorInput.value;

    if (scaleValue != "") {
        scale();
    }
    
    if (colorValue != "") {
        changeColor();
    }

    hidePopUpWindow('change');
}