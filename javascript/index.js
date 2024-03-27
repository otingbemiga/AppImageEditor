
// const navMenu = document.getElementById('nav-menu'),
//     navToggle = document.getElementById('nav-toggle'),
//     navClose = document.getElementById('nav-close'),

// if(navToggle){
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }


// if(navClose){
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

// const navLink = document.querySelectorAll('.nav__link')
// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')

//     navMenu.classList.remove('show-menu')

// }
// navLink.forEach(n => n.addEventListener('click', linkAction));



// ==================Change of Element ==================
// function myFunction(){
//     document.getElementById('demo').style.fontSize = '25px';
//     document.getElementById('demo').style.color = 'red';
//     document.getElementById('demo').style.backgroundColor = 'yellow';

// }


function myFunction() {
    const demoElement = document.getElementById('demo');
    const curreentFontSize = window.getComputedStyle(demoElement).getPropertyValue('font-size');
    if(curreentFontSize === '16px'){
        demoElement.style.fontSize = '40px';
        demoElement.style.color = 'red'
        demoElement.style.backgroundColor = 'yellow';
    }else{
        demoElement.style.fontSize = '16px';
        demoElement.style.color = 'black'
        demoElement.style.backgroundColor = 'transparent';
    }
}