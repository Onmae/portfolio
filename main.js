'use strict';

//Make navbar Scrolling animation
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(navbarHeight <= window.scrollY) {
        navbar.classList.add('navbar__scrolling');
    }else {
        navbar.classList.remove('navbar__scrolling');
    }
});
