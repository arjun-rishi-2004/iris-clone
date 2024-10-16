let hamburger_menu_icon = document.getElementsByClassName("hamburger-menu")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
let logo = document.getElementsByClassName("logo")[0]
let navbar=document.getElementsByClassName("navbar")[0]
let product_nav_button=document.getElementsByClassName("products-nav-button")[0]
let contentOne=document.getElementsByClassName("content-one")[0];
let sub_menu=document.getElementsByClassName("sub-menu")[0]
let downarrow=document.getElementsByClassName("downarrow")[0]

let second_row = document.getElementsByClassName("second-row")[0];


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    console.log("el",el)
    console.log("el top",rect.top)
    console.log("el bottom",rect.bottom)
    console.log("el ",rect.top)
    console.log("el",rect.top)


    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth 
    );
}

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


window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
const sectionThree = document.querySelector('.section-three');

function adjustFontSizeOnScroll() {
    const scrollY = window.scrollY; 
    const sectionTop = sectionThree.offsetTop; 
    const windowHeight = window.innerHeight;

    const distanceScrolled = scrollY - sectionTop + windowHeight;

    if (distanceScrolled > 0 && scrollY < (sectionTop + windowHeight)) {
        const maxFontSize = 2; 
        const newFontSize = Math.min(maxFontSize, distanceScrolled / 100);

        sectionThree.style.fontSize = `${newFontSize}rem`;
    } else if (scrollY < sectionTop) {
        sectionThree.style.fontSize = '0rem';
    }
}



function toggleMenu() {
    navLinks.classList.toggle('show');
  }




window.addEventListener('scroll', adjustFontSizeOnScroll);

const container = document.querySelector('.background-setup');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY-1200; 
  container.style.transform = `translateX(-${scrollPosition*0.5}px)`
});


hamburger_menu_icon.addEventListener('click', () => {
    hamburger_menu_icon.classList.toggle("open")
    if (hamburger_menu_icon.textContent === '☰') {
        hamburger_menu_icon.textContent = '✖';  // Show close icon
    } else {
        hamburger_menu_icon.textContent = '☰';  // Show hamburger icon
    }

    second_row.classList.toggle('active'); 

    console.log("Hamburger menu clicked");
});


product_nav_button.addEventListener('click', () => {
    sub_menu.classList.toggle("active"); 
    console.log("Products menu clicked");
    // downarrow.style.transform="rotate(180deg)"
    downarrow.classList.toggle("active")

});

  window.addEventListener('scroll', function() {
    const background = document.querySelector('.section-one .background');
    const scrollPosition = window.scrollY;

    background.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
  });


  