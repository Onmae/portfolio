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
const navbarMenu = document.querySelector('.navbar__menu');
console.log(navbarMenu);
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');

    scrollIntoView(link);
});


//Navbar toggle button for phone screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
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

const workBtnContainer = document.querySelector('.work__category');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    //Remove selection and set new
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('active');

    projectsContainer.classList.add('animate-out');
    setTimeout(()=> {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectsContainer.classList.remove('animate-out');
    },300);


});


function scrollIntoView(selecctor) {
    const scrollTo = document.querySelector(selecctor);
    scrollTo.scrollIntoView( {behavior: 'smooth'});

}