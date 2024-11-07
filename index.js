const side_bar_button = document.querySelector('.side-bar-button');
const navLinks = document.querySelector('.nav-links');

side_bar_button.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
