document.addEventListener('DOMContentLoaded', function() {
    let isScrolling;
    setInterval(rotateImage, 10000);

    window.addEventListener('scroll', function() {
        document.querySelector('.navbar').style.backgroundColor = 'black';
        clearTimeout(isScrolling);

         // Ensure the navbar background is transparent when not scrolling
        isScrolling = setTimeout(function() {
            document.querySelector('.navbar').style.backgroundColor = 'transparent';
        }, 200);
    });
});



function rotateImage() {
    var currentPhoto = document.querySelector(".landing-page img.current");
    var images = document.querySelectorAll(".landing-page img");
    var currentIndex = Array.from(images).indexOf(currentPhoto);
    var nextIndex = (currentIndex + 1) % images.length;
    var nextPhoto = images[nextIndex];

   


    currentPhoto.classList.remove('current');
    currentPhoto.classList.add('previous');
    nextPhoto.style.opacity = 0;
    nextPhoto.classList.add('current');
    
    setTimeout(function() {
        nextPhoto.style.opacity = 1;
        currentPhoto.classList.remove('previous');
    }, 1000);

  };

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
