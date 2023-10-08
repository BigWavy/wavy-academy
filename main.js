// change navbar styles on scroll

window.addEventListener('scroll' , () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 400)
})

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-button");
const CloseBtn = document.querySelector("#close-menu-button");


menuBtn.addEventListener('click' , () =>{
    menu.style.display = "flex";
    CloseBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close the nav menu 
const closeNav = () => {
    menu.style.display = "none";
    CloseBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

CloseBtn.addEventListener('click' ,closeNav)