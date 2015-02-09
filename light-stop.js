// ==UserScript== 
// @name Light-Stop
// @namespace none 
// @description The smart light to dark filter
// @include * 
// @version 1.0
// @homepage none
// ==/UserScript==

(function () {
    if (window.getComputedStyle(document.body, null).getPropertyValue("background-color") == "rgb(255, 255, 255)") {
        console.log("Setting new background color...");
        document.body.setAttribute("style", "background-color: #333333;");
    }
})();
