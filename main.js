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

    scrollIntoView(link);
});

// scrolling when tapping contact me
const contactMe = document.querySelector('.home__contact span');
contactMe.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// Show 'arrow up" button
const arrowUp = document.querySelector('.arrow-up');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    if (window.scrollY > homeHeight / 2 ) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Go Home when clicking 'arrow up'
arrowUp.addEventListener('click', () =>{
    scrollIntoView('#home');
});

function scrollIntoView(selecctor) {
    const scrollTo = document.querySelector(selecctor);
    scrollTo.scrollIntoView( {behavior: 'smooth'});

}