const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('main-nav').querySelector('ul');

hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');

  hamburgerBtn.textContent = mainNav.classList.contains('open') ? '✖' : '☰';
});
