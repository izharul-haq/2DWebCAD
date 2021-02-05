function closePopUpWindow(index) {
    var popUpWindows = document.getElementsByClassName('popup-container');
    var activePopUpWindow = popUpWindows[index];
    activePopUpWindow.style.display = "none";
}