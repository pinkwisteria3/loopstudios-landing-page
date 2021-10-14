const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.nav');
const header = document.querySelector('header');
openIcon.addEventListener('click',function(){
    closeIcon.style.display='block';
    openIcon.style.display='none';
    nav.classList.add('open')
    navLinks.classList.add('open');
    header.classList.add('open')
})

closeIcon.addEventListener('click',function(){
    closeIcon.style.display='none';
    openIcon.style.display='block';
    nav.classList.remove('open')
    navLinks.classList.remove('open');
    header.classList.remove('open');
})