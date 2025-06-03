document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]');
    const password = this.querySelector('input[type="password"]');
    const role = this.querySelector('select');

    let errorMsg = "";

    if (!email.value.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email.value.trim())) {
        errorMsg = "Valid email is required.";
    } else if (!password.value || password.value.length < 6) {
        errorMsg = "Password must be at least 6 characters.";
    }

    let oldMsg = this.querySelector('.login-error, .login-success');
    if (oldMsg) oldMsg.remove();

    if (errorMsg) {
        const errDiv = document.createElement('div');
        errDiv.className = 'login-error';
        errDiv.style.color = '#d32f2f';
        errDiv.style.marginBottom = '0.7rem';
        errDiv.style.fontWeight = '500';
        errDiv.textContent = errorMsg;
        this.insertBefore(errDiv, this.querySelector('.login-submit'));
    } else {
        const successDiv = document.createElement('div');
        successDiv.className = 'login-success';
        successDiv.style.color = '#388e3c';
        successDiv.style.marginBottom = '0.7rem';
        successDiv.style.fontWeight = '500';
        successDiv.textContent = 'Login successful!';
        this.insertBefore(successDiv, this.querySelector('.login-submit'));
        this.reset();
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
});

const cancelBtn = document.querySelector('.login-cancel');
if (cancelBtn) {
    cancelBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}