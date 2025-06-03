document.querySelector('.signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = this.querySelector('input[placeholder="First name"]');
    const lastName = this.querySelector('input[placeholder="Last name"]');
    const dob = this.querySelector('input[type="date"]');
    const fin = this.querySelector('input[placeholder="FIN code"]');
    const email = this.querySelector('input[type="email"]');
    const phone = this.querySelector('input[type="tel"]');
    const password = this.querySelectorAll('input[type="password"]')[0];
    const confirmPassword = this.querySelectorAll('input[type="password"]')[1];

    let errorMsg = "";

    if (!firstName.value.trim()) errorMsg = "First name is required.";
    else if (!lastName.value.trim()) errorMsg = "Last name is required.";
    else if (!dob.value) errorMsg = "Date of birth is required.";
    else if (!fin.value.trim() || fin.value.trim().length !== 7) errorMsg = "FIN code must be 7 characters.";
    else if (!email.value.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email.value.trim())) errorMsg = "Valid email is required.";
    else if (!phone.value.trim() || phone.value.trim().length < 7) errorMsg = "Valid phone number is required.";
    else if (!password.value || password.value.length < 6) errorMsg = "Password must be at least 6 characters.";
    else if (password.value !== confirmPassword.value) errorMsg = "Passwords do not match. Please check your password.";

    let oldError = this.querySelector('.signup-error, .signup-success');
    if (oldError) oldError.remove();

    if (errorMsg) {
        const errDiv = document.createElement('div');
        errDiv.className = 'signup-error';
        errDiv.style.color = '#d32f2f';
        errDiv.style.marginBottom = '0.7rem';
        errDiv.style.fontWeight = '500';
        errDiv.textContent = errorMsg;
        this.insertBefore(errDiv, this.querySelector('.signup-actions'));
    } else {
        const successDiv = document.createElement('div');
        successDiv.className = 'signup-success';
        successDiv.style.color = '#388e3c';
        successDiv.style.marginBottom = '0.7rem';
        successDiv.style.fontWeight = '500';
        successDiv.textContent = 'Registration completed successfully!';
        this.insertBefore(successDiv, this.querySelector('.signup-actions'));
        this.reset();
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
});

document.querySelector('.signup-cancel').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'index.html';
});