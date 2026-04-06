let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i; 
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].className = "slide";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = "dot";
        dots[i].textContent = "☆";
    }
    slides[slideIndex-1].className += " visible";
    dots[slideIndex - 1].className += " currentdot";
    dots[slideIndex-1].textContent = "★";
}