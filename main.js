const secondMenuBtn = document.querySelector('.second-menu-btn');
const secondMenuOptions = document.querySelector('.second-menu-options');
const bottomNav = document.querySelector('.bottom-nav-container');

secondMenuBtn.addEventListener('click', () => {
  if (secondMenuOptions.style.display === 'flex') {
    secondMenuOptions.style.display = 'none';
  } else {
    secondMenuOptions.style.display = 'flex';
  }
});

secondMenuOptions.addEventListener('click', () => {
  bottomNav.style.display = 'flex';
  secondMenuBtn.style.display = 'none';
  secondMenuOptions.style.display = 'none';
});

bottomNav.addEventListener('click', () => {
  bottomNav.style.display = 'none';
  secondMenuBtn.style.display = 'block';
});
