document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    form.addEventListener('input', function () {
        validateForm();
    });

    function validateForm() {
        // Clear previous errors
        clearErrors();

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Validation flags
        let isValid = true;

        // Validate Full Name
        if (fullName.length < 5) {
            showError('fullNameError', 'Name must be at least 5 characters long');
            isValid = false;
        }

        // Validate Email
        if (!email.includes('@')) {
            showError('emailError', 'Enter a valid email address');
            isValid = false;
        }

        // Validate Phone Number
        const phoneRegex = /^\d{10}$/;
        if (phoneNumber === '1234567890' || !phoneRegex.test(phoneNumber)) {
            showError('phoneError', 'Enter a valid 10-digit phone number');
            isValid = false;
        }

        // Validate Password
        if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
            showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name');
            isValid = false;
        }

        // Validate Confirm Password
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});
