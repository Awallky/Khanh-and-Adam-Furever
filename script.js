document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. COUNTDOWN TIMER
     ========================================================= */
  // Set target date in San Francisco / Pacific Daylight Time (PDT is UTC-7)
  const targetDate = new Date('2026-10-24T16:30:00-07:00').getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  function updateCountdown() {
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      const container = document.querySelector('.countdown-container');
      if (container) {
        container.innerHTML = 
          '<p style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--accent-color);">Today is the day!</p>';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Initial call and set 1-second interval
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* =========================================================
     2. IMAGE MODAL (LIGHTBOX)
     ========================================================= */
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const galleryImages = document.querySelectorAll('.gallery-img');

  function openModal(imgSrc, altText) {
    if (!modal || !modalImg || !modalCaption) return;
    modalImg.src = imgSrc;
    modalImg.alt = altText;
    modalCaption.textContent = altText;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal() {
    if (!modal || !modalImg) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
    // Clear src after animation finishes to prevent frame flickering
    setTimeout(() => { modalImg.src = ''; }, 250);
  }

  // Attach event listeners to gallery images
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      openModal(img.src, img.alt);
    });
  });

  // Close handlers
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close when clicking outside the image backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

});
