document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    const navLinks = primaryNav.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  if (contactForm && formAlert) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let hasError = false;

      if (!nameInput.value.trim()) {
        nameInput.classList.add('has-error');
        nameError.classList.add('is-visible');
        hasError = true;
      } else {
        nameInput.classList.remove('has-error');
        nameError.classList.remove('is-visible');
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('has-error');
        emailError.classList.add('is-visible');
        hasError = true;
      } else {
        emailInput.classList.remove('has-error');
        emailError.classList.remove('is-visible');
      }

      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('has-error');
        subjectError.classList.add('is-visible');
        hasError = true;
      } else {
        subjectInput.classList.remove('has-error');
        subjectError.classList.remove('is-visible');
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        messageInput.classList.add('has-error');
        messageError.classList.add('is-visible');
        hasError = true;
      } else {
        messageInput.classList.remove('has-error');
        messageError.classList.remove('is-visible');
      }

      if (hasError) {
        return;
      }

      formAlert.textContent = 'Thank you for your message. Your inquiry has been submitted.';
      formAlert.className = 'form-alert is-success';

      contactForm.reset();

      setTimeout(() => {
        formAlert.className = 'form-alert';
        formAlert.textContent = '';
      }, 5000);
    });

    const formInputs = [nameInput, emailInput, subjectInput, messageInput];
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        input.classList.remove('has-error');
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement) {
          errorElement.classList.remove('is-visible');
        }
      });
    });
  }
});
