function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const icon = document.querySelector('.theme-toggle i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById('popup').classList.remove('hidden');
  }, 1000);
};
