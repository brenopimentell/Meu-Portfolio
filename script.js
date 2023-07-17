const menu = document.querySelector(".menu-barra");
const navMenu = document.querySelector('.nav-menuu');

menu.addEventListener('click' , () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})