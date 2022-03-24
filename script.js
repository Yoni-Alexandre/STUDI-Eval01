const btnMenu = document.querySelector('.btn-hamburger');
const menu = document.querySelector('.navigation');
const couleurHamburger = document.querySelector('.barreHamburger')


btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  /* couleurHamburger.classList.toggle('colorWhite'); */
});

