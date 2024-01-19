document.getElementById('next').addEventListener('click', function() {
    changeSlide(1);
});
document.getElementById('prev').addEventListener('click', function() {
    changeSlide(-1);
});

let currentSlide = 0;
let slides = document.querySelectorAll('.slide');

slides[currentSlide].style.display = 'block';

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}
