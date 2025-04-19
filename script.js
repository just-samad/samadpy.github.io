function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const icon = document.querySelector('.theme-toggle i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.onload = function () {
  setTimeout(() => {
    document.getElementById('popup').classList.remove('hidden');
  }, 1000);

};