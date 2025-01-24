let currentIndex = 0;

const slider = document.querySelector('.hero-slider'); // Kontainer slider
const totalSlides = document.querySelectorAll('.slide').length; // Jumlah slide

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Hitung indeks slide berikutnya
    slider.style.transform = `translateX(-${100 * currentIndex}%)`; // Geser slider
}

// Atur interval untuk animasi slider (misalnya setiap 3 detik)
setInterval(showNextSlide, 3000);
