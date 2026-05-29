// Modal functionality
const signupModal = document.getElementById('signupModal');
const signupBtns = document.querySelectorAll('#signupBtn');
const loginBtns = document.querySelectorAll('#loginBtn');
const modalClose = document.getElementById('modalClose');

function openModal() {
  if (signupModal) {
    signupModal.classList.add('open');
  }
}

function closeModal() {
  if (signupModal) {
    signupModal.classList.remove('open');
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

// Hamburger menu toggle
const hamburgerBtns = document.querySelectorAll('#hamburgerBtn');

hamburgerBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const navLinks = this.closest('.nav-inner').querySelector('.nav-links');
    if (navLinks) {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
  });
});
