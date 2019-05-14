// Your code goes here

//logo
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', event => {
    event.target.style.fontSize = '7rem'
});

//header
const navBar = document.querySelector('.main-navigation');

navBar.addEventListener('auxclick', event => {
    event.target.style.background = 'yellow'
});


//navigation
const navItems = document.querySelectorAll('.nav-link');

navItems[0].addEventListener('dblclick', event => {
    alert('home a pressed')
    event.stopPropagation();
});

navItems.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
}))

const navLinks = document.querySelector('.nav');

navLinks.addEventListener('dblclick', event => {
    alert('nav links pressed')
});

//Intro

const intro = document.querySelector('.intro img');

intro.addEventListener('drag', event => {
    intro.style.display = 'none'
})

//let's go

const letGo = document.querySelectorAll('.text-content h2')

letGo[0].addEventListener('copy', event => {
    letGo[0].style.fontSize = '7rem';
    console.log(something)
})

//adventure awaits

letGo[1].addEventListener('cut', event => {
    letGo[1].textContent = 'I am a replacement'
});

//pick your destination

const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener('click', event => {
    destinationImg.setAttribute('src', 'img/fun-bus.jpg')
})

const destTitle = document.querySelectorAll('.destination p');

destTitle[1].addEventListener('mouseenter', event => {
    destTitle[1].style.backgroundColor = 'yellow';
});

const button = document.querySelectorAll('.btn');

button[2].addEventListener('wheel', event => {
    button[0].style.color = 'black'
});

button[0].addEventListener('mouseleave', event => {
    button[2].style.backgroundColor = 'pink'
});