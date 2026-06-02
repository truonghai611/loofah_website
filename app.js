// Loofah — interactions
(function () {
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

  // RFQ form -> success state
  var rfq = document.getElementById('rfqForm');
  if (rfq) {
    rfq.addEventListener('submit', function (e) {
      e.preventDefault();
      rfq.style.display = 'none';
      document.getElementById('rfqSuccess').classList.add('show');
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
    track.parentElement.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, {passive: true});
    track.parentElement.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    }, {passive: true});
  })();
})();

/* ── Proof image lightbox ── */
(function () {
  var lb      = document.getElementById('proofLightbox');
  var lbImg   = document.getElementById('lightboxImg');
  var lbCap   = document.getElementById('lightboxCaption');
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
