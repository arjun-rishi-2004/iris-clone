let hamburger_menu_icon = document.getElementsByClassName("hamburger-menu")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
let logo = document.getElementsByClassName("logo")[0];
let navbar = document.getElementsByClassName("navbar")[0];
let product_nav_button = document.getElementsByClassName("products-nav-button")[0];
let second_row = document.getElementsByClassName("second-row")[0];
let sub_menu = document.getElementsByClassName("sub-menu")[0];

// // Combined click event for the hamburger menu
// hamburger_menu_icon.addEventListener('click', () => {
//     navLinks.classList.toggle('active');  // Toggle nav links
//     logo.classList.toggle('active');      // Toggle logo active class
//     navbar.classList.toggle('active');    // Toggle navbar active class
//     second_row.classList.toggle('active'); // Toggle second row visibility
//     console.log("Hamburger menu clicked");
// });

// Event for the Products button to show/hide the sub-menu

// For the hamburger menu (already working fine)
hamburger_menu_icon.addEventListener('click', () => {
    if (second_row.classList.contains('active')) {
        second_row.style.height = 0;  // Collapse
    } else {
        second_row.style.height = second_row.scrollHeight + 'px';  // Expand to its full height
    }
    
    second_row.classList.toggle('active');
});

// For the product submenu
product_nav_button.addEventListener('click', () => {
    if (sub_menu.classList.contains('active')) {
        sub_menu.style.height = 0 + 'px';  // Collapse the submenu
        second_row.style.height = second_row.scrollHeight - sub_menu.scrollHeight + 'px';  // Adjust second_row height accordingly
    } else {
        sub_menu.style.height = sub_menu.scrollHeight + 'px';  // Expand the submenu
        second_row.style.height = second_row.scrollHeight + sub_menu.scrollHeight + 'px';  // Expand second_row to fit the submenu
    }

    sub_menu.classList.toggle("active");  // Toggle submenu visibility
    console.log("Products menu clicked");
});



