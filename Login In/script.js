// JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Perform login validation or submission logic here
        console.log('Login submitted');
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Perform signup validation or submission logic here
        console.log('Signup submitted');
      });
    }
  });
  