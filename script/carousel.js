window.addEventListener('DOMContentLoaded', function () {
    let slides = document.getElementsByClassName('slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }
});
