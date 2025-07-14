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

    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve input values
        const name = document.getElementById('Name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Regular expression to check if email ends with '@gmail.com'
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        // Simulated existing emails for demonstration
        const existingEmails = ['test@gmail.com', 'example@gmail.com'];

        // Check if email is valid and exists
        if (!emailRegex.test(email)) {
            alert('Please enter a valid Gmail address.');
            return;
        }

        if (!existingEmails.includes(email)) {
            alert('Your email does not exist.');
            return;
        }

        (function(){
            emailjs.init("_WnrWch_sOW9D93rs"); 
        })();

        // Send email using EmailJS
         emailjs.send('service_oevbe2h', 'template_ynm7b79', {
             name: name,
             email: email,
             message: message
         }).then(function(response) {
             alert('Email sent successfully!');
         }, function(error) {
             alert('Failed to send email. Please try again.');
         });
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
  

