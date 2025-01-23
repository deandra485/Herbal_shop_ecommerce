let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.transform = `translateX(-${100 * currentIndex}%)`;
}

setInterval(showNextSlide, 3000); // Ganti slide setiap 3 detik
