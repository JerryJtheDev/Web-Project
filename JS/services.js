document.addEventListener('DOMContentLoaded', function() {
    let isScrolling;
    window.addEventListener('scroll', function() {
        document.querySelector('.navbar').style.backgroundColor = 'black';
        clearTimeout(isScrolling);

        // Ensure the navbar background is transparent when not scrolling
        isScrolling = setTimeout(function() {
            document.querySelector('.navbar').style.backgroundColor = 'transparent';
        }, 200);
    });

    // Add hover functionality for details display and button functionality and automatic image slider


    const sections = document.querySelectorAll('.services-section1 div, .services-section2 div');    
    const section1 = document.querySelector('.services-section1');
    const section2 = document.querySelector('.services-section2');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    nextButton.addEventListener('click', () => {
        section1.style.display = 'none';
        section2.style.display = 'flex';
    });

    prevButton.addEventListener('click', () => {
        section1.style.display = 'flex';
        section2.style.display = 'none';
    });

    sections.forEach(section => {    
        const images1 = section.querySelectorAll('img');
        let currentIndex = 0;

        // Automatic image slider
        setInterval(() => {
            images1[currentIndex].style.display = 'none'; // Hide current image
            currentIndex = (currentIndex + 1) % images.length; // Move to the next image
            images1[currentIndex].style.display = 'block'; // Show next image
        }, 10000); // Change image every 10 seconds


        const details = section.querySelector('.details');
        const images = section.querySelectorAll('img');

    });
});

const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  var loader = document.getElementById('preloader');

  window.addEventListener("load", function(){
      loader.style.display = 'none';
  })
  
