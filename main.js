// Modal functionality
const signupModal = document.getElementById('signupModal');
const signupBtns = document.querySelectorAll('#signupBtn');
const loginBtns = document.querySelectorAll('#loginBtn');
const modalClose = document.getElementById('modalClose');

function openModal() {
  if (signupModal) {
    signupModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (signupModal) {
    signupModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

signupBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

loginBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (signupModal) {
  signupModal.addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Filter chip interactivity
const filterChips = document.querySelectorAll('.filter-chip');

filterChips.forEach(chip => {
  chip.addEventListener('click', function() {
    filterChips.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
});

// Mobile search toggle
const searchToggles = document.querySelectorAll('.search-toggle');

searchToggles.forEach(btn => {
  btn.addEventListener('click', function() {
    const searchBar = this.closest('.search-bar');
    if (searchBar) {
      searchBar.classList.toggle('mobile-expanded');
      const input = searchBar.querySelector('input');
      if (searchBar.classList.contains('mobile-expanded')) {
        input.style.display = 'block';
        input.focus();
      }
    }
  });
});

// Hamburger menu — mobile drawer toggle
const hamburgerBtns = document.querySelectorAll('#hamburgerBtn');

hamburgerBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const nav = this.closest('.primary-nav');
    nav.classList.toggle('drawer-open');
    const navLinks = nav.querySelector('.nav-links');
    const navActions = nav.querySelector('.nav-actions');
    if (navLinks) {
      navLinks.classList.toggle('drawer-visible');
    }
    if (navActions) {
      navActions.classList.toggle('drawer-visible');
    }
  });
});

// Close drawer on link click
document.querySelectorAll('.nav-links a, .nav-actions a').forEach(link => {
  link.addEventListener('click', function() {
    const nav = this.closest('.primary-nav');
    nav.classList.remove('drawer-open');
    const navLinks = nav.querySelector('.nav-links');
    const navActions = nav.querySelector('.nav-actions');
    if (navLinks) navLinks.classList.remove('drawer-visible');
    if (navActions) navActions.classList.remove('drawer-visible');
  });
});
