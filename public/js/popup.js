// This .js file is used to define every function
// that will be used by popup window in general

window.hidePopUpWindow = function hidePopUpWindow(window) {
    var popUpWindow = document.getElementById(window + "-popup");
    popUpWindow.style.display = "none";
}