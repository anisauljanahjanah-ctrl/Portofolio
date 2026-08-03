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
    
    const imageBox = document.querySelector(".image-box");
    
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
SEND EMAIL
=========================*/

function sendMail(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name==="" || email==="" || message===""){

        alert("Silakan lengkapi semua data terlebih dahulu.");

        return;

    }

    const subject = encodeURIComponent("Pesan dari Portfolio Website");

    const body = encodeURIComponent(
`Nama : ${name}

Email : ${email}

Pesan :

${message}`
    );

    window.location.href=`mailto:anisauljanahjanah@gmail.com?subject=${subject}&body=${body}`;

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

const aboutTyping = document.getElementById("about-typing");

const aboutText = `Saya adalah siswi SMK Negeri 1 Rembang jurusan Rekayasa Perangkat Lunak yang memiliki minat di bidang Front-End Development dan UI/UX Design.

Saya senang membuat website yang modern, responsif, dan mudah digunakan. Selain itu, saya juga memiliki pengalaman menggunakan Figma untuk mendesain antarmuka website, Canva untuk membuat desain visual, serta CapCut untuk mengedit video dan konten.

Saat ini saya terus belajar, mengembangkan kemampuan, dan membangun berbagai project agar menjadi Front-End Developer yang profesional.`;

let i = 0;

function typingAbout(){

    if(!aboutTyping) return;

    if(i < aboutText.length){

        aboutTyping.innerHTML += aboutText.charAt(i);

        i++;

        setTimeout(typingAbout,20);

    }

}

typingAbout();