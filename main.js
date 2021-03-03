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

// Handle scrolling when tapping navbar menu
const navbarMenu = document.querySelector('#navbar');
console.log(navbarMenu);
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    console.log(link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView( {behavior: 'smooth' });
});