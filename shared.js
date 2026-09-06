// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

function closeMenu() {
  hamburgerBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
}

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

menuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});
