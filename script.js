const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});
