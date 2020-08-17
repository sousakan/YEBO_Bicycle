const burger = document.querySelector('#burger')
const navLinks = document.querySelector('#nav__links')
const items = document.querySelectorAll('#nav__links .nav__item')
const links = document.querySelectorAll('[data-scroll]')


function burgerUpdate()
{
    burger.classList.toggle('burger--active')
    navLinks.classList.toggle('nav__links--active')

    items.forEach((item, index) => {
        if (item.style.animation)
        {
            item.style.animation = ''
        }
        else
        {
            item.style.animation = `${index / 7}s linear .1s forwards navItemFade`
        }
    })
}

//Adding EventListeners

burger.addEventListener('click', burgerUpdate)

//Smooth scroll

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        burgerUpdate()

        let elementID = link.dataset.scroll
        let element = document.querySelector(elementID)

        element.scrollIntoView({behavior: "smooth", block: "start"});
    })
})