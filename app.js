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
  // s