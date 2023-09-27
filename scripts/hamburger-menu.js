const hidebutton = document.querySelector('.ham-hide');
const showbutton = document.querySelector('.menu-show');
const mainnav = document.querySelector('#main-nav');

hidebutton.addEventListener('click',() =>{
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    mainnav.classList.toggle('showing');
})

showbutton.addEventListener('click',() =>{
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    mainnav.classList.toggle('showing');
})