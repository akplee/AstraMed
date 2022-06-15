let toggle = document.querySelector('.dropdown-menu-toggle');
let menu = document.querySelector('.dropdown-menu');

toggle.onclick = function(){
    menu.classList.toggle('active');
}