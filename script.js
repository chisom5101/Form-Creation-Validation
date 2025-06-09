document.addEventListener('DOMContentLoaded', function () {
    // Select form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add submit event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length){
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Show feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda"; // Optional success background
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Restore original error background
        }
    });
});