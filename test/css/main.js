//This is the codes for expanding and contracting a paragraph
 
function toggleExpand(element) {
    element.classList.toggle('expanded');
}
 
// This is the codes for tooltip where you hover over a word and a message pops up
 
document.addEventListener("DOMContentLoaded", function() {
    var tooltip = document.querySelector('.tooltiptext');
    tooltip.textContent = "An example is something that is representative of all such things in a group.";
});
 
 
 
//This is the java codes for making "image carousel" or "slideshow."
 
 
let slideIndex = 0;
 
function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // Hide all images
    });
 
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first image
    }
   
    slides[slideIndex - 1].style.display = "block"; // Display the current image
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
 
 
 
function moveSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.carousel-slide img');
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // Hide all images
    });
    slides[slideIndex - 1].style.display = "block"; // Display the current image
}
 
// Initialize the slideshow
showSlides();