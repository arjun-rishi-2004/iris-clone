let hamburger_menu_icon = document.getElementsByClassName("hamburger-menu")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
let logo = document.getElementsByClassName("logo")[0]
let navbar=document.getElementsByClassName("navbar")[0]
let product_nav_button=document.getElementsByClassName("products-nav-button")[0]
let contentOne=document.getElementsByClassName("content-one")[0];
let sub_menu=document.getElementsByClassName("sub-menu")[0]


let second_row = document.getElementsByClassName("second-row")[0];

hamburger_menu_icon.addEventListener('click', () => {
    second_row.classList.toggle('active');  
    console.log("Hamburger menu clicked");
});

product_nav_button.addEventListener('click', () => {
    sub_menu.classList.toggle("active");  
    console.log("Products menu clicked");
});
// Function to check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'show' class to cards when they enter the viewport
function handleScroll() {
    if (isElementInViewport(contentOne)){
        contentOne.classList.add('show')
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show');
        }
    });
}


// Listen for scroll events and trigger the function
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
// Select the section-three element
const sectionThree = document.querySelector('.section-three');

// Function to adjust font size based on scroll position
function adjustFontSizeOnScroll() {
    const scrollY = window.scrollY; // Current vertical scroll position
    const sectionTop = sectionThree.offsetTop; // Position of section-three from the top of the page
    const windowHeight = window.innerHeight;

    // Calculate how much the user has scrolled relative to section-three
    const distanceScrolled = scrollY - sectionTop + windowHeight;

    // Set a range for scaling (e.g., font size grows between 0rem to 5rem)
    if (distanceScrolled > 0 && scrollY < (sectionTop + windowHeight)) {
        // Limit the font size growth with a maximum value (e.g., 5rem)
        const maxFontSize = 2; // Maximum font size in rem
        const newFontSize = Math.min(maxFontSize, distanceScrolled / 100); // Control scaling factor

        // Apply the new font size
        sectionThree.style.fontSize = `${newFontSize}rem`;
    } else if (scrollY < sectionTop) {
        // When scrolled above the section, set font size back to 0rem
        sectionThree.style.fontSize = '0rem';
    }
}


// const container = document.querySelector('.background-setup');

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY-1300; // Get the vertical scroll position
//   container.style.transform = `translateX(-${scrollPosition}px)` // Move the div horizontally
// });

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }




// Attach the scroll event listener to the window
window.addEventListener('scroll', adjustFontSizeOnScroll);

const container = document.querySelector('.background-setup');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY-1200; // Get the vertical scroll position
  container.style.transform = `translateX(-${scrollPosition*0.5}px)` // Move the div horizontally
});