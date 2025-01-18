let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    // Show the current slide and highlight the corresponding dot
    slides[index].style.display = "block";
    dots[index].classList.add("active");
}

// Auto-show slides every 5 seconds
function autoShowSlides() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Set slide manually
function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Initialize the slideshow
showSlide(currentSlide);
setInterval(autoShowSlides, 5000);
