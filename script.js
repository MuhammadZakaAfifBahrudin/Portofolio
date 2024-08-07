document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.getElementById('toggle-menu');
  const navLinks = document.getElementById('nav-links');

  toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

const h1_1 = document.getElementById('h1-1');
h1_1.addEventListener('animationend', () => {
  h1_1.classList.add('text-done');
});

const nama = document.querySelector('.text');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
