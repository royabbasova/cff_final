document.querySelector('.menu-toggle').onclick = function () {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelectorAll('.nav-links a, .hero .btn').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.textContent.trim() === 'Contact Us') {
            e.preventDefault();
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

const doctorsData = [
    {
        img: './images/doc1.svg',
        name: 'Dr. Rena Aliyeva',
        specialty: 'Psychologist',
        hospital: 'Referans Clinic',
        birthdate: 'March 15, 1991',
        experience: '10 years',
        education: 'Medical University',
        workplaces: 'Cleveland Clinic, New Life Hospital'
    },
    {
        img: './images/doc2.svg',
        name: 'Dr. Murad Zamanov',
        specialty: 'Cardiologist',
        hospital: 'Referans Clinic',
        birthdate: 'April 2, 1987',
        experience: '12 years',
        education: 'Azerbaijan Medical University',
        workplaces: 'Central Hospital, Referans Clinic'
    },
    {
        img: './images/doc3.svg',
        name: 'Dr. Arzu Jalil',
        specialty: 'Dentist',
        hospital: 'Referans Clinic',
        birthdate: 'July 22, 1990',
        experience: '8 years',
        education: 'Baku State Medical University',
        workplaces: 'Smile Center, Referans Clinic'
    }
];

document.querySelectorAll('.expert-card').forEach((card, idx) => {
    card.addEventListener('click', function () {
        const doc = doctorsData[idx];
        document.querySelector('.doctor-modal-img').src = doc.img;
        document.querySelector('.doctor-modal-img').alt = doc.name;
        document.querySelector('.doctor-modal-name').textContent = doc.name;
        document.querySelector('.doctor-modal-specialty').textContent = doc.specialty;
        document.querySelector('.doctor-modal-hospital').innerHTML = '<span class="hospital-icon">&#128205;</span> ' + doc.hospital;
        document.querySelector('.doctor-modal-birthdate').textContent = doc.birthdate;
        document.querySelector('.doctor-modal-experience').textContent = doc.experience;
        document.querySelector('.doctor-modal-education').textContent = doc.education;
        document.querySelector('.doctor-modal-workplaces').textContent = doc.workplaces;
        document.getElementById('doctorModal').style.display = 'flex';
    });
});
document.getElementById('doctorModalClose').onclick = function () {
    document.getElementById('doctorModal').style.display = 'none';
};
window.addEventListener('click', function (e) {
    const modal = document.getElementById('doctorModal');
    if (e.target === modal) modal.style.display = 'none';
});

document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]')?.value.trim();
        const email = form.querySelector('input[type="email"]')?.value.trim();
        const phone = form.querySelector('input[type="tel"]')?.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{9}$/;

        let valid = true;
        let message = '';

        if (!name || !email || !phone) {
            valid = false;
            message = 'Please fill in all fields correctly.';
        } else if (!emailPattern.test(email)) {
            valid = false;
            message = 'Please enter a valid email address.';
        } else if (!phonePattern.test(phone)) {
            valid = false;
            message = 'Please enter a valid phone number (exactly 9 digits, only numbers).';
        }

        showContactNotification(valid
            ? 'Thank you! We will contact you soon.'
            : message,
            valid ? 'success' : 'error'
        );

        if (valid) form.reset();
    });
});

function showContactNotification(msg, type) {
    let notif = document.createElement('div');
    notif.className = 'contact-notification ' + type;
    notif.textContent = msg;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.classList.add('show');
    }, 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

document.querySelectorAll('.footer-links-group .footer-links-col').forEach(col => {
    const title = col.querySelector('.footer-links-title')?.textContent.trim().toLowerCase();
    col.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            const text = this.textContent.trim().toLowerCase();
            let selector = '';

            if (title === 'company') {
                if (text === 'about us') selector = '.about';
                else if (text === 'our families') selector = '.stats';
                else if (text === 'subscriptions') selector = '.subscriptions';
                else if (text === 'contact us') selector = '.contact';
            }

            if (text === 'faq') selector = '.faq';

            if (selector && document.querySelector(selector)) {
                e.preventDefault();
                document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

