let hamburger_menu_icon = document.getElementsByClassName("hamburger-menu")[0];
let second_row = document.getElementsByClassName("second-row")[0];
let product_nav_button = document.getElementsByClassName("products-nav-button")[0];
let sub_menu = document.getElementsByClassName("sub-menu")[0];

// For the hamburger menu
hamburger_menu_icon.addEventListener('click', () => {
    second_row.classList.toggle('active');  // Toggle visibility of second row
    console.log("Hamburger menu clicked");
});


// For the product submenu
product_nav_button.addEventListener('click', () => {
    sub_menu.classList.toggle("active");  // Toggle submenu visibility
    console.log("Products menu clicked");
});
