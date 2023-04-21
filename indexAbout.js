const aboutpage = document.querySelector('#aboutpage');

const hamburger = document.querySelector('#hamburger-menu');

const crossInMenu = document.querySelector('#close-menu');

hamburger.addEventListener('click', (e) => {
    document.querySelector('#menu').style.display = 'block';
});

crossInMenu.addEventListener('click', (e) => {
    document.querySelector('#menu').style.display = 'none';
});