var typed = new Typed(".auto-input", {
    strings: ["NAZARIY SHYPKA", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
  
}
