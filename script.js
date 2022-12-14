/*
const Menu = document.getElementById('Menu')
const toMenu = document.getElementById('toMenu')
const toMenu2 = document.getElementById('toMenu2')

const scrollToMenu = () => {
    Menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

toMenu.onclick = scrollToMenu;
toMenu2.onclick = scrollToMenu;


const Restaurant = document.getElementById('Restaurant')
const toRestaurant = document.getElementById('toRestaurant')

const scrollToRestaurant = () => {
    Restaurant.scrollIntoView({ behavior: 'smooth', block: 'start', })
}

toRestaurant.onclick = scrollToRestaurant;


const History = document.getElementById('History')
const toHistory = document.getElementById('toHistory')

const scrollToHistory = () => {
    History.scrollIntoView({ behavior: 'smooth', block: 'start', })
}

toHistory.onclick = scrollToHistory;

const Contacts = document.getElementById('Contacts')
const toContacts = document.getElementById('toContacts')

const scrollToContacts = () => {
    Contacts.scrollIntoView({ behavior: "smooth", block: "start" })
}

toContacts.onclick = scrollToContacts;
*/


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iOS/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc')
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}


const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault();
        }
    }
}

/*const buttonLinks = document.querySelectorAll('.btn-welcome[data-goto]')
if (buttonLinks.length > 0) {
    buttonLinks.forEach(buttonLink => {
        buttonLink.addEventListener('click', onButtonLinkClick)
    });
    function onButtonLinkClick(e) {
        const buttonLink = e.target;
        if (buttonLink.dataset.goto && document.querySelector(buttonLink.dataset.goto)) {
            const goBlock = document.querySelector(buttonLink.dataset.goto);
            const goBlockValue = goBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: goBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault();
        }
    }
}*/

/*const Menu = document.getElementById('Menu')
const toMenu = document.getElementById('toMenu')

const scrollToMenu = () => {
    Menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

toMenu.onclick = scrollToMenu;*/

const Welcome = document.getElementById('Welcome')
const toWelcome = document.getElementById('toWelcome')


const scrollToWelcome = () => {
    const gotoBlock = document.querySelector(toWelcome.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
    window.scrollTo({ behavior: 'smooth', block: 'start', top: gotoBlockValue });
}

toWelcome.onclick = scrollToWelcome;