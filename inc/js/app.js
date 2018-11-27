
(function() {
    'use strict';

     var content = document.getElementById('hamburger-content')
     var sideBarBody= document.getElementById("hamburger_sidebar-body");
     var button= document.getElementById("burger-button");
     var closer= document.getElementById("closer-button");
     var sideBar = document.getElementById('hamburger_sidebar');

     var activatedClass = 'hamburger-activated';
     sideBarBody.innerHTML = content.innerHTML;

     button.addEventListener('click', function(e){
         e.preventDefault();
        sideBar.classList.toggle(activatedClass);
        if (sideBar.classList = activatedClass) {
            button.classList.toggle("hidden")
        }

        if (sideBar.classList = activatedClass) {
            closer.classList.remove("hidden");
            console.log(closer);
        }
     });

     closer.addEventListener('click', function(e){
         e.preventDefault();
         sideBar.classList.toggle(activatedClass);
        if (sideBar.classList !=activatedClass) {
            closer.classList.toggle('hidden');
        }

        if(sideBar.classList != activatedClass){
            button.classList.toggle('hidden');
        }

    });

}());

// (function() {
//     'use strict';
//
//     const containerBox = document.querySelectorAll('.container-2-box.shadow');
//     console.log(containerBox);
//     const btnHover = document.querySelectorAll('.btn');
//     console.log(btnHover);
//
//     containerBox.addEventListener('mouseover', function(e){
//         e.preventDefault();
//         btnHover.classList.replace('btn','btnHover');
//
//
//     })
//     containerBox.addEventListener('mouseout', function(e){
//         e.preventDefault();
//         btnHover.classList.replace('btnHover','btn');
//     })
//
// }());
