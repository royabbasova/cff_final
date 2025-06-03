document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


document.querySelectorAll('.doctor-card').forEach(card => {
    const bookArea = card.querySelector('.book-clinic-area');
    if (!bookArea) return;
    const bookBtn = bookArea.querySelector('.book-btn');
    const modal = bookArea.querySelector('.calendar-modal');
    const closeBtn = modal?.querySelector('.calendar-close');
    const dateInput = modal?.querySelector('.calendar-date');
    const timeArea = modal?.querySelector('.calendar-time-area');
    const timeSelect = modal?.querySelector('.calendar-time');
    const confirmBtn = modal?.querySelector('.calendar-confirm-btn');
    const errorDiv = modal?.querySelector('.calendar-error');

    if (!bookBtn || !modal || !closeBtn || !dateInput || !timeArea || !timeSelect || !confirmBtn || !errorDiv) return;

    let reservedDates = [];

    dateInput.min = new Date().toISOString().split('T')[0];

    bookBtn.onclick = function () {
        modal.style.display = 'flex';
        errorDiv.style.display = 'none';
        dateInput.value = '';
        timeArea.style.display = 'none';
        timeSelect.value = '';
    };

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    dateInput.onchange = function () {
        errorDiv.style.display = 'none';
        if (reservedDates.includes(dateInput.value)) {
            errorDiv.textContent = 'This date is already booked!';
            errorDiv.style.display = 'block';
            timeArea.style.display = 'none';
        } else if (dateInput.value) {
            timeArea.style.display = 'block';
        } else {
            timeArea.style.display = 'none';
        }
    };

    confirmBtn.onclick = function () {
        errorDiv.style.display = 'none';
        if (!dateInput.value) {
            errorDiv.textContent = 'Please select a date!';
            errorDiv.style.display = 'block';
            return;
        }
        if (reservedDates.includes(dateInput.value)) {
            errorDiv.textContent = 'This date is already booked!';
            errorDiv.style.display = 'block';
            return;
        }
        if (!timeSelect.value) {
            errorDiv.textContent = 'Please select a time!';
            errorDiv.style.display = 'block';
            return;
        }
        reservedDates = [dateInput.value];
        modal.style.display = 'none';
        bookBtn.remove();
        const info = document.createElement('div');
        info.className = 'booked-info';
        info.style.marginTop = '0.7rem';
        info.style.fontWeight = '500';
        info.style.color = '#1ca7a7';
        info.textContent = `Booked: ${dateInput.value} / ${timeSelect.value}`;
        bookArea.appendChild(info);
    };
});

