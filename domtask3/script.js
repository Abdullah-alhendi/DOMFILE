function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Registration successful!');
        document.getElementById('registration').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('userInfo').innerText = `Username: ${user.username}`;
    } else {
        alert('Invalid credentials.');
    }
}

function showEditProfile() {
    document.getElementById('editProfile').style.display = 'block';
}

function saveChanges() {
    const newUsername = document.getElementById('editUsername').value;
    const newPassword = document.getElementById('editPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newUsername && newPassword && newPassword === confirmPassword) {
        const user = { username: newUsername, password: newPassword };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Profile updated successfully!');
        document.getElementById('userInfo').innerText = `Username: ${newUsername}`;
        document.getElementById('editProfile').style.display = 'none';
    } else {
        alert('Please ensure all fields are filled out correctly and passwords match.');
    }
}

function logoutUser() {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

document.getElementById('loginUsername').addEventListener('input', function() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    document.getElementById('loginBtn').disabled = !username || !password;
});

document.getElementById('loginPassword').addEventListener('input', function() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    document.getElementById('loginBtn').disabled = !username || !password;
});

document.getElementById('editUsername').addEventListener('input', function() {
    const newUsername = document.getElementById('editUsername').value;
    const newPassword = document.getElementById('editPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('saveChangesBtn').disabled = !newUsername || !newPassword || newPassword !== confirmPassword;
});

document.getElementById('editPassword').addEventListener('input', function() {
    const newUsername = document.getElementById('editUsername').value;
    const newPassword = document.getElementById('editPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('saveChangesBtn').disabled = !newUsername || !newPassword || newPassword !== confirmPassword;
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const newUsername = document.getElementById('editUsername').value;
    const newPassword = document.getElementById('editPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('saveChangesBtn').disabled = !newUsername || !newPassword || newPassword !== confirmPassword;
});
