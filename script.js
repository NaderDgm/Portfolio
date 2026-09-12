/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("theme-toggle");


// Check if user already selected a theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "🌙";

} else {

    themeToggle.textContent = "☀️";

}


// Change theme when button is clicked
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .experience-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});



/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}