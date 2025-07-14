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
  