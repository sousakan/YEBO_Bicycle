const burger = document.querySelector('#burger')
const navLinks = document.querySelector('#nav__links')

//Adding EventListeners

burger.addEventListener('click', event => {
    burger.classList.toggle('burger--active')
    navLinks.classList.toggle('nav__links--active')
})
