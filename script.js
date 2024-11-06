// let menuIcon = document.getElementById("menu-icon");
// let navbar = document.querySelector(".navbar");  

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark');  // Toggle between bars and X icon
//     navbar.classList.toggle('active');  // Toggle active class to show/hide navbar
// };

function resetForm() {
    setTimeout(function () {
        document.getElementById('form').reset();  
    }, 1000);  
    return true; 
}


// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when scrolling
    // menuIcon.classList.remove('fa-xmark');
    // navbar.classList.remove('active');
};

// scroll Reveal
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Photographer', 'Video Editor'],
    typeSpeed: 70, 
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});
