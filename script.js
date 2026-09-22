document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. DUAL LOCATION COUNTDOWN TIMER
     ========================================================= */
  const destinations = {
    kentucky: {
      label: 'Counting down to Cliffview Resort (Kentucky):',
      // Saturday, October 23, 2027 at 4:30 PM EDT (UTC-4)
      targetDate: new Date('2027-10-23T16:30:00-04:00').getTime(),
      finishedText: 'Today is the Kentucky Celebration Day!'
    },
    vietnam: {
      label: 'Counting down to An Lâm Retreats (Saigon River):',
      // Saturday, November 13, 2027 at 3:00 PM ICT (UTC+7)
      targetDate: new Date('2027-11-13T15:00:00+07:00').getTime(),
      finishedText: 'Today is the Vietnam Celebration Day!'
    }
  };

  let currentDestinationKey = 'kentucky';

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  const countdownLabel = document.getElementById('countdown-label');
  const countdownTabs = document.querySelectorAll('.countdown-tab');

  function updateCountdown() {
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const currentDest = destinations[currentDestinationKey];
    const now = new Date().getTime();
    const distance = currentDest.targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      if (countdownLabel) {
        countdownLabel.textContent = currentDest.finishedText;
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

  // Handle countdown tab click
  countdownTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      countdownTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetKey = tab.getAttribute('data-target');
      if (destinations[targetKey]) {
        currentDestinationKey = targetKey;
        if (countdownLabel) {
          countdownLabel.textContent = destinations[targetKey].label;
        }
        updateCountdown();
      }
    });
  });

  // Initial countdown update & interval
  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* =========================================================
     3. IMAGE MODAL (LIGHTBOX)
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
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal || !modalImg) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { modalImg.src = ''; }, 250);
  }

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      openModal(img.src, img.alt);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

});
