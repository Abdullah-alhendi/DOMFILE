/////// exercis2
document.getElementById('registrationForm').addEventListener('input', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '') {
        displayError('username', 'Username is required.');
    } else {
        clearError('username');
    }

    if (password === '') {
        displayError('password', 'Password is required.');
    } else {
        clearError('password');
    }

    if (confirmPassword === '') {
        displayError('confirmPassword', 'Confirm Password is required.');
    } else {
        clearError('confirmPassword');
    }
});

function displayError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    inputField.setCustomValidity(message);
    inputField.reportValidity();
}

function clearError(fieldId) {
    const inputField = document.getElementById(fieldId);
    inputField.setCustomValidity('');
}

///// exercis3
document.getElementById('registrationForm').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        displayError('confirmPassword', 'Passwords do not match.');
    } else {
        clearError('confirmPassword');
    }
});


///// exercis4
document.getElementById('registrationForm').addEventListener('input', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const isFormValid = username !== '' && password !== '' && confirmPassword === password;
    document.getElementById('registerBtn').disabled = !isFormValid;
});



///// exercis5

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Registration successful!';

    // Optionally, you can reset the form or store user data here
    document.getElementById('registrationForm').reset();
    document.getElementById('registerBtn').disabled = true;
});

