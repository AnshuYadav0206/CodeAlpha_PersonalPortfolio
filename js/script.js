/**
 * Aditya Patel - Personal Portfolio Interactive Logic
 * Fully Vanilla JavaScript, modular, and performant.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Current Year in Footer
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Dark / Light Theme Toggle
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  // --------------------------------------------------------------------------
  // 3. Typing Effect in Hero Section
  // --------------------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Frontend Specialist',
    'Backend Architect',
    'Open Source Builder'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause after full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  // --------------------------------------------------------------------------
  // 4. Header Scroll State & Active Nav Link Tracking
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header blur state
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll to Top visibility
    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active nav link based on scroll position
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initial check

  // Scroll to Top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on clicking any link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Skills Filtering
  // --------------------------------------------------------------------------
  const skillFilterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'growBar 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Projects Filtering
  // --------------------------------------------------------------------------
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-project-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.3s ease';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 8. Animated Stat Counters
  // --------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimatedCounters = false;

  function animateCounters() {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800; // ms
      const increment = target / (duration / 20);

      let current = 0;
      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          setTimeout(updateCount, 20);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Intersection Observer for Scroll Reveal & Stat Counter
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // Trigger counters when stats section enters
          if (!hasAnimatedCounters && entry.target.classList.contains('stat-card')) {
            animateCounters();
            hasAnimatedCounters = true;
          }

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --------------------------------------------------------------------------
  // 10. Copy Email to Clipboard
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'adityapatel@example.com';
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast('Email address copied to clipboard!', 'success');
          const originalText = copyEmailBtn.innerHTML;
          copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
          setTimeout(() => {
            copyEmailBtn.innerHTML = originalText;
          }, 2500);
        })
        .catch(() => {
          showToast('Failed to copy. Please manually copy: ' + email, 'info');
        });
    });
  }

  // --------------------------------------------------------------------------
  // 11. Interactive Contact Form with Validation & Feedback
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formStatusAlert = document.getElementById('form-status-alert');

  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailError.classList.remove('visible');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        messageInput.classList.add('is-invalid');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageError.classList.remove('visible');
      }

      if (!isValid) return;

      // Simulate sending
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        formStatusAlert.textContent = '🎉 Thank you! Your message has been sent successfully. Aditya will reply soon.';
        formStatusAlert.className = 'form-status-alert success';

        showToast('Message sent successfully!', 'success');
        contactForm.reset();

        setTimeout(() => {
          formStatusAlert.style.display = 'none';
          formStatusAlert.className = 'form-status-alert';
        }, 6000);
      }, 1400);
    });

    // Real-time input clear errors
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        const err = input.parentElement.parentElement.querySelector('.error-msg');
        if (err) err.classList.remove('visible');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 12. Modals: Resume & Project Preview
  // --------------------------------------------------------------------------
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const aboutResumeTrigger = document.getElementById('about-resume-trigger');
  const closeResumeBtn = document.getElementById('close-resume-btn');
  const modalCloseBtnFooter = document.getElementById('modal-close-btn-footer');
  const downloadResumeAction = document.getElementById('download-resume-action');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openResumeBtn) {
    openResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeModal);
    });
  }

  if (aboutResumeTrigger) {
    aboutResumeTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeModal);
    });
  }

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', () => closeModal(resumeModal));
  }

  if (modalCloseBtnFooter) {
    modalCloseBtnFooter.addEventListener('click', () => closeModal(resumeModal));
  }

  if (downloadResumeAction) {
    downloadResumeAction.addEventListener('click', () => {
      showToast('Downloading Aditya_Patel_Resume.pdf...', 'success');
      // Create a simulated download or file trigger
      const link = document.createElement('a');
      link.href = 'assets/resume/Aditya_Patel_Resume.txt';
      link.download = 'Aditya_Patel_Resume.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal(resumeModal);
    });
  }

  // Demo Modal Logic
  const demoModal = document.getElementById('demo-modal');
  const openDemoBtns = document.querySelectorAll('.open-demo-btn');
  const closeDemoBtn = document.getElementById('close-demo-btn');
  const modalDemoClose = document.getElementById('modal-demo-close');
  const demoModalTitle = document.getElementById('demo-modal-title');
  const demoModalDesc = document.getElementById('demo-modal-desc');

  openDemoBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Project Showcase';
      const desc = btn.getAttribute('data-desc') || 'Project details.';
      if (demoModalTitle) demoModalTitle.textContent = title;
      if (demoModalDesc) demoModalDesc.textContent = desc;
      openModal(demoModal);
    });
  });

  if (closeDemoBtn) {
    closeDemoBtn.addEventListener('click', () => closeModal(demoModal));
  }

  if (modalDemoClose) {
    modalDemoClose.addEventListener('click', () => closeModal(demoModal));
  }

  // Close modals on clicking backdrop
  [resumeModal, demoModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(resumeModal);
      closeModal(demoModal);
    }
  });

  // --------------------------------------------------------------------------
  // 13. Toast Notification Helper
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    const iconClass = type === 'success' ? 'fa-solid fa-circle-check toast-icon success' : 'fa-solid fa-circle-info toast-icon info';
    toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3200);
  }

});
