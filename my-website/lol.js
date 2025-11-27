document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let slideIndex = 0;
    let autoSlideInterval;
 
    function showSlide(n) {
        if (slides.length === 0) return;
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "block";
    }
 
    function moveSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
        resetAutoSlide();
    }
 
    function update() {
        track.style.transform = `translateX(-${slideIndex * 100}%)`;
        slides.forEach((s, i) => s.classList.toggle("active", i === slideIndex));
        dots.forEach(d => d.classList.remove("active"));
        if (dots[slideIndex]) dots[slideIndex].classList.add("active");
    }


    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }
 
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 5000);
    }
 
    if (prevBtn) prevBtn.addEventListener("click", () => moveSlide(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => moveSlide(1));
 
    showSlide(slideIndex);
    resetAutoSlide();
});