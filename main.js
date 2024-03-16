const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');

menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('show-menu');
});
