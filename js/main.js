document.addEventListener('DOMContentLoaded', function () {
    var loginLink = document.querySelector('#login-link');
    var signupLink = document.querySelector('#signup-link');
    var loginForm = document.querySelector('#login-form');
    var signupForm = document.querySelector('#signup-form');

    loginLink.addEventListener('click', showLogIn);
    signupLink.addEventListener('click', showSignUp);

    function showSignUp () {
        // Show sign up link
        loginLink.classList.remove('active');
        signupLink.classList.add('active');
        // Hide login form
        loginForm.classList.add('hide');
        setTimeout(() => {
            loginForm.classList.remove('show');
            // Show sign up form
            signupForm.classList.add('show');
            signupForm.classList.remove('hide');
        }, 200);
    };

    function showLogIn () {
        // Show login link
        signupLink.classList.remove('active');
        loginLink.classList.add('active');
        // Hide login form
        signupForm.classList.add('hide');
        setTimeout(() => {
            signupForm.classList.remove('show');
            // Show sign up form
            loginForm.classList.add('show');
            loginForm.classList.remove('hide');
        }, 200);
    }

});