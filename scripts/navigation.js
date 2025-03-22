
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.links');


menuBtn.addEventListener('click', () => {
  
  navLinks.classList.toggle('active');
});
