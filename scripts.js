let hamburger_menu_icon = document.getElementsByClassName("hamburger-menu")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];

hamburger_menu_icon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
    console.log("clicked");
});
