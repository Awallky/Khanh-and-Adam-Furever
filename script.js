document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. TRANSLATION DICTIONARY (EN & VI)
     ========================================================= */
  const translations = {
    en: {
      nav_home: 'Home',
      nav_destinations: 'Destinations',
      nav_schedule: 'Schedule',
      nav_gallery: 'Gallery',
      nav_travel: 'Travel',
      nav_rsvp: 'RSVP',
      nav_registry: 'Registry',

      hero_tagline: 'Khanh & Adam Furever',
      hero_subtitle: 'Two celebrations, two corners of the world, one love story.',
      badge_ky_title: 'Kentucky Celebration',
      badge_ky_date: 'October 23, 2027 • Cliffview Resort',
      badge_vn_title: 'Vietnam Celebration',
      badge_vn_date: 'November 13, 2027 • An Lâm Retreats',
      
      cd_tab_ky: 'Cliffview Resort (Oct 23)',
      cd_tab_vn: 'An Lâm Saigon River (Nov 13)',
      cd_label_ky: 'Counting down to Cliffview Resort (Oct 23, 2027 • 4:30 PM EDT in Kentucky):',
      cd_label_vn: 'Counting down to An Lâm Retreats (Nov 13, 2027 • 3:00 PM ICT in Saigon):',
      cd_finished_ky: 'Today is the Kentucky Celebration Day!',
      cd_finished_vn: 'Today is the Vietnam Celebration Day!',
      cd_days: 'Days',
      cd_hours: 'Hours',
      cd_mins: 'Mins',
      cd_secs: 'Secs',
      hero_rsvp_btn: 'RSVP for Celebrations',

      dest_title: 'Our Two Venues',
      dest_intro: 'We are thrilled to celebrate our marriage with two distinct ceremonies surrounded by stunning nature and our beloved family and friends.',
      dest_ky_tag: 'USA Celebration',
      dest_ky_date: 'Saturday, October 23, 2027 • 4:30 PM – 8:30 PM',
      dest_ky_place: 'Red River Gorge • Campton, Kentucky',
      dest_ky_desc: 'Perched amidst the majestic forests and scenic cliffs of the Red River Gorge, Cliffview Resort offers panoramic views, tranquil lakeside settings, and cozy lodge accommodations.',
      dest_ky_btn_web: 'Visit Resort Website ↗',
      dest_ky_btn_map: 'View on Google Maps →',
      dest_vn_tag: 'Vietnam Celebration',
      dest_vn_date: 'Saturday, November 13, 2027 • 3:00 PM – 10:00 PM',
      dest_vn_place: 'Saigon River • Ho Chi Minh City, Vietnam',
      dest_vn_desc: 'Nestled under a lush tropical canopy along the tranquil banks of the Saigon River, An Lâm Retreats combines serene riverside elegance, private boat transfers, and timeless Vietnamese hospitality.',
      dest_vn_btn_retreat: 'Explore Retreat ↗',
      dest_vn_btn_wedding: 'Wedding Venue Info →',

      sched_title: 'Ceremony Schedule',
      sched_intro: 'Wedding celebration times for both events:',
      sched_ky_tag: 'Kentucky',
      sched_ky_title: 'Wedding Celebration',
      sched_ky_time: 'Saturday, October 23, 2027<br>4:30 PM – 8:30 PM',
      sched_ky_loc: 'Cliffview Resort • Campton, KY',
      sched_ky_link: 'Visit Resort Website →',
      sched_vn_tag: 'Vietnam',
      sched_vn_title: 'Wedding Celebration',
      sched_vn_time: 'Saturday, November 13, 2027<br>3:00 PM – 10:00 PM',
      sched_vn_loc: 'An Lâm Retreats Saigon River • Ho Chi Minh City, Vietnam',
      sched_vn_link: 'Explore An Lâm Retreats →',

      gallery_title: 'Gallery',
      gallery_intro: 'Memories from our adventures together as we count down to forever. View our shared album or add your own photos!',
      gallery_btn: '📷 View & Add Photos to Google Photos Album ↗',

      travel_title: 'Travel & Logistics',
      travel_ky_tag: 'Kentucky Logistics',
      travel_ky_title: 'Getting to Cliffview Resort',
      travel_ky_airports_title: 'Nearest Airports:',
      travel_ky_airport_lex: '<strong>LEX</strong> (Lexington Blue Grass Airport) — ~1 hour drive',
      travel_ky_airport_cvg: '<strong>CVG</strong> (Cincinnati / Northern KY) — ~2 hours drive',
      travel_ky_airport_sdf: '<strong>SDF</strong> (Louisville Muhammad Ali) — ~2 hours drive',
      travel_ky_stay: '<strong>Accommodations:</strong> On-site rooms at The Lodge and private luxury cabins throughout the resort.',
      travel_ky_link: 'Directions on Google Maps →',
      travel_vn_tag: 'Vietnam Logistics',
      travel_vn_title: 'Getting to An Lâm Retreats',
      travel_vn_airports_title: 'Nearest Airport:',
      travel_vn_airport_sgn: '<strong>SGN</strong> (Tan Son Nhat International Airport, Ho Chi Minh City)',
      travel_vn_transfer: '<strong>Transportation:</strong> Details TBD.',
      travel_vn_visa: '<strong>Passport & Visa:</strong> Please verify your passport has at least 6 months validity and check Vietnam e-Visa requirements prior to departure.',

      rsvp_title: 'RSVP',
      rsvp_subtext: 'Whether joining us in Kentucky, Vietnam, or both, please kindly respond by the dates below.',
      rsvp_ky_deadline: '<strong>Cliffview Resort (KY):</strong> RSVP by August 15, 2027',
      rsvp_vn_deadline: '<strong>An Lâm Retreats (VN):</strong> RSVP by August 15, 2027',
      rsvp_update_note: 'Need to change your plans? You can re-submit this form or use the edit link in your confirmation email.',
      rsvp_direct_link: 'Having trouble with the form? Open RSVP in a new tab →',

      registry_title: 'Registry',
      registry_subtext: 'Having you celebrate with us across the globe is the greatest gift of all. If you would like to contribute to our future travels and home, we have set up the funds below:',
      registry_btn_honeymoon: 'Honeymoon Fund',
      registry_btn_wedding: 'Wedding Registry',

      footer_text: "We can't wait to celebrate with you!",
      footer_tag: 'Khanh & Adam Furever • Kentucky & Vietnam 2027'
    },

    vi: {
      nav_home: 'Trang Chủ',
      nav_destinations: 'Địa Điểm',
      nav_schedule: 'Lịch Trình',
      nav_gallery: 'Hình Ảnh',
      nav_travel: 'Di Chuyển',
      nav_rsvp: 'Xác Nhận',
      nav_registry: 'Quà Cưới',

      hero_tagline: 'Khanh & Adam Furever',
      hero_subtitle: 'Hai buổi lễ, hai phương trời, một câu chuyện tình yêu.',
      badge_ky_title: 'Lễ Cưới tại Kentucky',
      badge_ky_date: '23 Tháng 10, 2027 • Cliffview Resort',
      badge_vn_title: 'Lễ Cưới tại Việt Nam',
      badge_vn_date: '13 Tháng 11, 2027 • An Lâm Retreats',

      cd_tab_ky: 'Cliffview Resort (23/10)',
      cd_tab_vn: 'An Lâm Saigon River (13/11)',
      cd_label_ky: 'Đếm ngược đến lễ cưới tại Cliffview Resort (23/10/2027 • 16:30 giờ Kentucky, EDT):',
      cd_label_vn: 'Đếm ngược đến lễ cưới tại An Lâm Retreats (13/11/2027 • 15:00 giờ Sài Gòn, ICT):',
      cd_finished_ky: 'Hôm nay là ngày vui tại Kentucky!',
      cd_finished_vn: 'Hôm nay là ngày vui tại Việt Nam!',
      cd_days: 'Ngày',
      cd_hours: 'Giờ',
      cd_mins: 'Phút',
      cd_secs: 'Giây',
      hero_rsvp_btn: 'Xác Nhận Tham Dự',

      dest_title: 'Hai Địa Điểm Cưới',
      dest_intro: 'Chúng mình vô cùng hạnh phúc được tổ chức ngày vui tại hai không gian thiên nhiên tuyệt đẹp bên cạnh gia đình và bạn bè thân thương.',
      dest_ky_tag: 'Lễ Cưới tại Mỹ',
      dest_ky_date: 'Thứ Bảy, ngày 23 tháng 10 năm 2027 • 16:30 – 20:30',
      dest_ky_place: 'Red River Gorge • Campton, Kentucky',
      dest_ky_desc: 'Tọa lạc giữa khung cảnh thiên nhiên hùng vĩ và những vách đá tuyệt đẹp của Red River Gorge, Cliffview Resort mang đến tầm nhìn toàn cảnh, không gian hồ nước yên bình cùng các khu nhà gỗ ấm cúng.',
      dest_ky_btn_web: 'Trang Web Khu Nghỉ Dưỡng ↗',
      dest_ky_btn_map: 'Xem trên Google Maps →',
      dest_vn_tag: 'Lễ Cưới tại Việt Nam',
      dest_vn_date: 'Thứ Bảy, ngày 13 tháng 11 năm 2027 • 15:00 – 22:00',
      dest_vn_place: 'Bên bờ sông Sài Gòn • TP. Hồ Chí Minh, Việt Nam',
      dest_vn_desc: 'Ẩn mình dưới tán cây nhiệt đới xanh mát bên dòng sông Sài Gòn êm đềm, An Lâm Retreats kết hợp vẻ đẹp thơ mộng ven sông, dịch vụ đưa đón bằng cano riêng và lòng hiếu khách nồng ấm của người Việt.',
      dest_vn_btn_retreat: 'Khám Phá Khu Nghỉ Dưỡng ↗',
      dest_vn_btn_wedding: 'Thông Tin Không Gian Cưới →',

      sched_title: 'Lịch Trình Buổi Lễ',
      sched_intro: 'Thời gian tổ chức cho hai buổi lễ cưới:',
      sched_ky_tag: 'Kentucky',
      sched_ky_title: 'Lễ Cưới & Tiệc Mừng',
      sched_ky_time: 'Thứ Bảy, 23 Tháng 10, 2027<br>16:30 – 20:30',
      sched_ky_loc: 'Cliffview Resort • Campton, KY',
      sched_ky_link: 'Xem Trang Web Resort →',
      sched_vn_tag: 'Việt Nam',
      sched_vn_title: 'Lễ Cưới & Tiệc Mừng',
      sched_vn_time: 'Thứ Bảy, 13 Tháng 11, 2027<br>15:00 – 22:00',
      sched_vn_loc: 'An Lâm Retreats Sông Sài Gòn • TP. Hồ Chí Minh',
      sched_vn_link: 'Khám Phá An Lâm Retreats →',

      gallery_title: 'Bộ Sưu Tập Kỷ Niệm',
      gallery_intro: 'Những khoảnh khắc đáng nhớ trong hành trình tình yêu của chúng mình. Mời bạn xem toàn bộ album hoặc đóng góp thêm ảnh kỷ niệm!',
      gallery_btn: '📷 Xem & Thêm Ảnh vào Album Google Photos ↗',

      travel_title: 'Thông Tin Di Chuyển',
      travel_ky_tag: 'Di Chuyển đến Kentucky',
      travel_ky_title: 'Đến Cliffview Resort',
      travel_ky_airports_title: 'Các sân bay gần nhất:',
      travel_ky_airport_lex: '<strong>LEX</strong> (Sân bay Lexington Blue Grass) — ~1 giờ lái xe',
      travel_ky_airport_cvg: '<strong>CVG</strong> (Sân bay Cincinnati / Northern KY) — ~2 giờ lái xe',
      travel_ky_airport_sdf: '<strong>SDF</strong> (Sân bay Louisville Muhammad Ali) — ~2 giờ lái xe',
      travel_ky_stay: '<strong>Chỗ ở:</strong> Các phòng tại The Lodge và các căn biệt thự gỗ (cabin) riêng tư trong resort.',
      travel_ky_link: 'Chỉ đường trên Google Maps →',
      travel_vn_tag: 'Di Chuyển đến Việt Nam',
      travel_vn_title: 'Đến An Lâm Retreats',
      travel_vn_airports_title: 'Sân bay gần nhất:',
      travel_vn_airport_sgn: '<strong>SGN</strong> (Sân bay Quốc tế Tân Sơn Nhất, TP. Hồ Chí Minh)',
      travel_vn_transfer: '<strong>Phương tiện di chuyển:</strong> Thông tin sẽ được cập nhật sau (TBD).',
      travel_vn_visa: '<strong>Hộ chiếu & Thị thực:</strong> Vui lòng đảm bảo hộ chiếu còn hạn ít nhất 6 tháng và kiểm tra yêu cầu e-Visa Việt Nam trước chuyến bay.',

      rsvp_title: 'Xác Nhận Tham Dự',
      rsvp_subtext: 'Dù chung vui cùng chúng mình tại Kentucky, Việt Nam hay cả hai, xin vui lòng gửi phản hồi trước ngày dưới đây.',
      rsvp_ky_deadline: '<strong>Cliffview Resort (KY):</strong> Hạn phản hồi: 15/08/2027',
      rsvp_vn_deadline: '<strong>An Lâm Retreats (VN):</strong> Hạn phản hồi: 15/08/2027',
      rsvp_update_note: 'Cần thay đổi thông tin sau khi gửi? Bạn có thể gửi lại biểu mẫu này hoặc dùng đường dẫn chỉnh sửa trong email xác nhận.',
      rsvp_direct_link: 'Gặp khó khăn khi điền biểu mẫu? Mở RSVP trong tab mới →',

      registry_title: 'Quà Cưới',
      registry_subtext: 'Sự hiện diện và lời chúc phúc của bạn là món quà quý giá nhất dành cho chúng mình. Nếu bạn muốn gửi quà mừng đến tổ ấm tương lai, bạn có thể tham khảo các danh mục dưới đây:',
      registry_btn_honeymoon: 'Quỹ Trăng Mật',
      registry_btn_wedding: 'Danh Sách Quà Cưới',

      footer_text: 'Chúng mình rất mong được chung vui cùng bạn!',
      footer_tag: 'Khanh & Adam Furever • Kentucky & Việt Nam 2027'
    }
  };

  let currentLang = localStorage.getItem('site_lang') || 'en';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update text elements with data-i18n (safely render innerHTML if formatted tags exist)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        const val = translations[lang][key];
        if (val.includes('<') && val.includes('>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update HTML elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update countdown label
    updateCountdownLabel();
  }

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  /* =========================================================
     2. DUAL LOCATION COUNTDOWN TIMER
     ========================================================= */
  const destinations = {
    kentucky: {
      // Saturday, October 23, 2027 at 4:30 PM EDT (UTC-4)
      targetDate: new Date('2027-10-23T16:30:00-04:00').getTime(),
      labelKey: 'cd_label_ky',
      finishedKey: 'cd_finished_ky'
    },
    vietnam: {
      // Saturday, November 13, 2027 at 3:00 PM ICT (UTC+7)
      targetDate: new Date('2027-11-13T15:00:00+07:00').getTime(),
      labelKey: 'cd_label_vn',
      finishedKey: 'cd_finished_vn'
    }
  };

  let currentDestinationKey = 'kentucky';

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  const countdownLabel = document.getElementById('countdown-label');
  const countdownTabs = document.querySelectorAll('.countdown-tab');

  function updateCountdownLabel() {
    if (!countdownLabel) return;
    const dest = destinations[currentDestinationKey];
    const dict = translations[currentLang] || translations.en;
    countdownLabel.textContent = dict[dest.labelKey];
  }

  function updateCountdown() {
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const currentDest = destinations[currentDestinationKey];
    const now = new Date().getTime();
    const distance = currentDest.targetDate - now;
    const dict = translations[currentLang] || translations.en;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      if (countdownLabel) {
        countdownLabel.textContent = dict[currentDest.finishedKey];
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
        updateCountdownLabel();
        updateCountdown();
      }
    });
  });

  // Initial countdown update & interval
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Apply initial language
  setLanguage(currentLang);

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
