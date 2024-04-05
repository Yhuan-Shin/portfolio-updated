//carousel
window.addEventListener('load', function() {
  let slideIndex = 1;
  showSlides(slideIndex); 
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Function to show next slide
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Function to show previous slide
  function prevSlide() {
    plusSlides(-1);
  }

  // Function to show next slide
  function nextSlide() {
    plusSlides(1);
  }

  // Event listeners for previous and next buttons
  document.getElementById('prev').addEventListener('click', prevSlide);
  document.getElementById('next').addEventListener('click', nextSlide);
});

// Alert
function showAlert() {
  alert('Message sent!');
}
document.getElementById('Send').addEventListener('click', showAlert);