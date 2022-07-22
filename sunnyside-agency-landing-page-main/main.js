const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.header__nav');

menuButton.addEventListener('click', () => {
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none' ;
    } else {
        navLinks.style.display = 'block';
    }
})