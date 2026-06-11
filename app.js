// Loofah — interactions
(function () {
  // Public Enquiry API config — đọc từ cred.txt (key=value mỗi dòng).
  // Cả 2 giá trị đều public (client-id gửi qua header, endpoint không cần secret).
  var ENQUIRY_API_BASE = 'https://api.loofahvn.com';
  var ENQUIRY_CLIENT_ID = '';
  var credReady = fetch('cred.txt', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.text() : ''; })
    .then(function (txt) {
      txt.split('\n').forEach(function (line) {
        var i = line.indexOf('=');
        if (i < 0) return;
        var key = line.slice(0, i).trim();
        var val = line.slice(i + 1).trim();
        if (key === 'ENQUIRY_API_BASE' && val) ENQUIRY_API_BASE = val.replace(/\/+$/, '');
        else if (key === 'ENQUIRY_CLIENT_ID' && val) ENQUIRY_CLIENT_ID = val;
      });
    })
    .catch(function () { /* giữ default */ });
  // header shadow on scroll
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu toggle
  var toggle = document.getElementById('menuToggle');
  var body = document.body;
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  function closeMenu() {
    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  }

  // eased, header-aware smooth scroll for in-page anchors
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function headerOffset() {
    return (header ? header.offsetHeight : 0) + 14;
  }
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function smoothTo(targetY, duration) {
    var startY = window.scrollY;
    var dist = targetY - startY;
    if (Math.abs(dist) < 2) return;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      // behavior:'instant' overrides the CSS scroll-behavior:smooth so our
      // per-frame easing isn't fought by the browser's own smooth scroll
      window.scrollTo({ top: startY + dist * easeInOutCubic(p), behavior: 'instant' });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id === '#' || id === '#top') {
        e.preventDefault();
        closeMenu();
        smoothTo(0, 620);
        return;
      }
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      // let the menu begin collapsing, then measure & scroll
      requestAnimationFrame(function () {
        var y = target.getBoundingClientRect().top + window.scrollY - headerOffset();
        var dist = Math.abs(y - window.scrollY);
        smoothTo(y, Math.min(900, Math.max(480, dist * 0.5)));
      });
    });
  });

  // segmented button groups (single-select within a group)
  document.querySelectorAll('.seg').forEach(function (group) {
    group.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        group.querySelectorAll('button').forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
      });
    });
  });

  // RFQ form -> Public Enquiry API
  var rfq = document.getElementById('rfqForm');
  if (rfq) {
    var errBox = document.getElementById('rfqError');
    var submitBtn = rfq.querySelector('.rfq-submit');

    function selectedValue(groupName) {
      var on = rfq.querySelector('.seg[data-group="' + groupName + '"] button.on');
      return on ? on.getAttribute('data-value') : '';
    }
    function showError(msg) {
      if (!errBox) return;
      errBox.textContent = msg;
      errBox.hidden = false;
    }
    function lang() {
      try { return localStorage.getItem('loofah-lang') || 'en'; } catch (e) { return 'en'; }
    }
    // bilingual strings cho phần JS-sinh (i18n.js không swap được node runtime)
    var T = {
      en: {
        RATE_LIMITED: 'You’ve sent too many requests. Please try again later.',
        CAPTCHA_REQUIRED: 'Captcha verification required. Please refresh and retry.',
        CAPTCHA_FAILED: 'Captcha verification failed. Please try again.',
        CLIENT_ID_REQUIRED: 'Configuration error — please contact us directly.',
        CLIENT_ID_INVALID: 'Configuration error — please contact us directly.',
        UNKNOWN: 'Something went wrong. Please try again or email henry.nguyen@loofahvn.com.',
        EMAIL_REQUIRED: 'Please enter your email.',
        SENDING: 'Sending…'
      },
      vi: {
        RATE_LIMITED: 'Bạn gửi quá nhiều yêu cầu. Vui lòng thử lại sau.',
        CAPTCHA_REQUIRED: 'Cần xác minh captcha. Vui lòng tải lại trang và thử lại.',
        CAPTCHA_FAILED: 'Xác minh captcha thất bại. Vui lòng thử lại.',
        CLIENT_ID_REQUIRED: 'Lỗi cấu hình — vui lòng liên hệ trực tiếp với chúng tôi.',
        CLIENT_ID_INVALID: 'Lỗi cấu hình — vui lòng liên hệ trực tiếp với chúng tôi.',
        UNKNOWN: 'Có lỗi xảy ra. Vui lòng thử lại hoặc gửi email tới henry.nguyen@loofahvn.com.',
        EMAIL_REQUIRED: 'Vui lòng nhập email của bạn.',
        SENDING: 'Đang gửi…'
      }
    };
    function t(key) { return (T[lang()] || T.en)[key] || T.en[key]; }

    rfq.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errBox) errBox.hidden = true;

      var payload = {
        role: selectedValue('role'),
        targetMarket: selectedValue('market'),
        email: (rfq.querySelector('[name="email"]').value || '').trim(),
        interestedProducts: rfq.querySelector('[name="interestedProducts"]').value.trim(),
        estOrderQty: rfq.querySelector('[name="estOrderQty"]').value.trim(),
        needPrivateLabel: rfq.querySelector('[name="needPrivateLabel"]').value,
        currentStage: rfq.querySelector('[name="currentStage"]').value,
        message: rfq.querySelector('[name="message"]').value.trim(),
        website: rfq.querySelector('[name="website"]').value // honeypot
      };

      // bỏ field rỗng optional (Zod strip / tránh enum '' fail)
      ['interestedProducts', 'estOrderQty', 'needPrivateLabel', 'currentStage', 'message'].forEach(function (k) {
        if (!payload[k]) delete payload[k];
      });

      if (!payload.email) { showError(t('EMAIL_REQUIRED')); return; }

      var prevLabel = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t('SENDING'); }

      credReady
        .then(function () {
          if (!ENQUIRY_CLIENT_ID) throw new Error('CLIENT_ID_REQUIRED');
          return fetch(ENQUIRY_API_BASE + '/api/v1/public/enquiries', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-client-id': ENQUIRY_CLIENT_ID
            },
            body: JSON.stringify(payload)
          });
        })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (json) {
            return { ok: res.ok, json: json };
          });
        })
        .then(function (r) {
          if (!r.ok) {
            var code = (r.json && r.json.error && r.json.error.code) || 'UNKNOWN';
            throw new Error(code);
          }
          rfq.style.display = 'none';
          document.getElementById('rfqSuccess').classList.add('show');
        })
        .catch(function (err) {
          showError(t(err.message) || t('UNKNOWN'));
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = prevLabel; }
        });
    });
  }

  // newsletter signup
  var signup = document.getElementById('signupForm');
  if (signup) {
    signup.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = signup.querySelector('input');
      var btn = signup.querySelector('button');
      input.value = '';
      input.placeholder = 'You’re on the list ✓';
      btn.textContent = 'Joined';
      setTimeout(function () { btn.textContent = 'Join the list'; input.placeholder = 'you@company.com'; }, 2600);
    });
  }
  // shipment carousel
  (function () {
    var track = document.getElementById('shipmentTrack');
    var dotsWrap = document.getElementById('shipmentDots');
    if (!track || !dotsWrap) return;
    var slides = track.querySelectorAll('.shipment-slide');
    var total = slides.length;
    var visible = window.innerWidth <= 700 ? 1 : 3;
    var maxIndex = Math.max(0, total - visible);
    var current = 0;

    function buildDots() {
      dotsWrap.innerHTML = '';
      for (var i = 0; i <= maxIndex; i++) {
        var d = document.createElement('button');
        d.className = 'dot' + (i === current ? ' active' : '');
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        d.dataset.i = i;
        d.addEventListener('click', function () { goTo(+this.dataset.i); });
        dotsWrap.appendChild(d);
      }
    }

    function goTo(idx) {
      current = Math.min(Math.max(idx, 0), maxIndex);
      var slideW = slides[0].offsetWidth + 16;
      track.style.transform = 'translateX(-' + (current * slideW) + 'px)';
      dotsWrap.querySelectorAll('.dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    buildDots();

    // drag/swipe
    var startX = 0, dragging = false;
    track.parentElement.addEventListener('mousedown', function (e) { startX = e.clientX; dragging = true; });
    track.parentElement.addEventListener('mousemove', function (e) { if (dragging) e.preventDefault(); });
    track.parentElement.addEventListener('mouseup', function (e) {
      if (!dragging) return; dragging = false;
      var diff = startX - e.clientX;
      if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    });
    track.parentElement.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.parentElement.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    }, { passive: true });
  })();
})();

/* ── Proof image lightbox ── */
(function () {
  var lb = document.getElementById('proofLightbox');
  var lbImg = document.getElementById('lightboxImg');
  var lbCap = document.getElementById('lightboxCaption');
  var lbClose = document.getElementById('lightboxClose');
  if (!lb) return;

  function open(src, caption) {
    lbImg.src = src;
    lbImg.alt = caption;
    lbCap.textContent = caption;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.proof-item[data-lightbox]').forEach(function (fig) {
    fig.addEventListener('click', function () {
      open(fig.dataset.lightbox, fig.dataset.caption || '');
    });
  });

  lbClose.addEventListener('click', close);
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
}());
