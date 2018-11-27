var carousel = (function carousel() {
    "use strict";

    var images = ["inc/img/imagecard.jpg", "inc/img/imagemain.jpg"];
    var  position = 0;


    function next() {
        if (position + 1 === images.length) {
            position = 0;
        } else {
            position += 1;
        }
        slider.src = images[position];
        console.log(position);
    }

    function prev() {
        if (position - 1 < 0) {
            position = images.length-1;
        } else {
            position -=1;
        }
        slider.src = images[position];
        console.log(position);
    }
    window.addEventListener("DOMContentLoaded", function init() {
        document.getElementById("next").onclick = next;
        document.getElementById("prev").onclick = prev;
        var  slider = document.getElementById("slider");


    });

}());
