/*=========================
TYPING EFFECT
=========================*/

const typing = document.getElementById("typing");

const text = "Frontend Developer | UI/UX Designer";

let index = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    if (!deleting) {

        typing.textContent = text.substring(0, index);

        index++;

        if (index > text.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = text.substring(0, index);

        index--;

        if (index < 0) {

            deleting = false;

            index = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*=========================
ACTIVE NAVBAR
=========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================
HEADER SHADOW
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,18,38,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(10,20,45,.35)";
        header.style.boxShadow = "none";

    }

});

/*=========================
SCROLL TOP
=========================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";

    }

});


/*=========================
MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

    });

});

    /*=========================
    IMAGE FOLLOW MOUSE
    =========================*/
    
    const imageBox = document.querySelector(".home-image .image-box");
    
    document.addEventListener("mousemove",(e)=>{
        
        if(!imageBox) return;
        const x=(window.innerWidth/2-e.clientX)/40;
        const y=(window.innerHeight/2-e.clientY)/40;
        imageBox.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    
    document.addEventListener("mouseleave",()=>{
        if(!imageBox) return;
        imageBox.style.transform="rotateY(0deg) rotateX(0deg)";
    
    });

/*=========================
CONTACT FORM
=========================*/

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            return;
        }

        formStatus.textContent = "✓ Pesan berhasil dikirim!";
        formStatus.classList.add("show");

        contactForm.reset();

        setTimeout(function() {
            formStatus.classList.remove("show");
        }, 4000);

    });

}

/*=========================
ABOUT TYPING
=========================*/

/*=========================
ABOUT TYPING PARAGRAPH
=========================*/

/*=========================
ABOUT TYPING PARAGRAPH
=========================*/

/*=========================
ABOUT TEXT
=========================*/

const aboutTyping = document.getElementById("about-typing");

if (aboutTyping) {
    aboutTyping.innerHTML = `
        Saya adalah siswi SMK Negeri 1 Rembang jurusan Rekayasa Perangkat Lunak yang memiliki minat di bidang Front-End Development dan UI/UX Design.

        Saya senang membuat website yang modern, responsif, dan mudah digunakan. Selain itu, saya juga memiliki pengalaman menggunakan Figma untuk mendesain antarmuka website, Canva untuk membuat desain visual, serta CapCut untuk mengedit video dan konten.

        Saat ini saya terus belajar, mengembangkan kemampuan, dan membangun berbagai project agar menjadi Front-End Developer yang profesional.
    `;
}


/* ==============================
   SMOOTH SCROLL REVEAL
   Animasi hanya berjalan 1 kali
   ============================== */

const scrollElements = document.querySelectorAll(
    ".scroll-reveal, .scroll-image, .scroll-title, .scroll-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // Jalankan animasi
                entry.target.classList.add("show");

                // Berhenti mengamati elemen
                // agar animasi tidak berjalan lagi
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    }
);

scrollElements.forEach((element) => {
    revealObserver.observe(element);
});