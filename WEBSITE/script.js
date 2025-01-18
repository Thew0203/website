function toggleMenu() {
    const navbar = document.querySelector(".dropdown");
    const isOpen = navbar.style.transform === "translateY(0px)";
    navbar.style.transform = isOpen ? "translateY(-500px)" : "translateY(0px)";
}

const words = ["Developer", "Designer", "Innovator"];
let i = 0;
const typewriterSpan = document.querySelector(".typewriter span");

setInterval(() => {
    typewriterSpan.textContent = words[i];
    i = (i + 1) % words.length;
}, 2000);
