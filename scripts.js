let hamburger_menu_icon = document.getElementsByClassName("hamburger-menu")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];

hamburger_menu_icon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
    console.log("clicked");
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
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show');
        }
    });
}

// Listen for scroll events and trigger the function
window.addEventListener('scroll', handleScroll);

// Initial check in case some elements are already in view on load
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


const container = document.querySelector('.background-setup');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Get the vertical scroll position
  container.style.right =scrollPosition +"px"; // Move the div horizontally
});

// Attach the scroll event listener to the window
window.addEventListener('scroll', adjustFontSizeOnScroll);


