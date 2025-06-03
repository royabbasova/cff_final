const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('.hospital-view-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'hospital-detail.html';
    });
});

