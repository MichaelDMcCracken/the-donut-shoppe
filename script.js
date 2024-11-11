// Get the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll events
window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#551082BB';  // Solid color when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent';  // Transparent when at top
    }
};

// Toggle hamburger menu on mobile
const hamburger = document.getElementById('hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
