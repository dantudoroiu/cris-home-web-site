const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '1rem';
    navLinks.style.background = '#14352b';
    navLinks.style.padding = '1rem';
    navLinks.style.borderRadius = '0.75rem';
  });
}

const form = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.namedItem('name')?.value || 'Oaspete';
    formMessage.textContent = `Mulțumim, ${name}! Vă vom contacta în curând.`;
    form.reset();
  });
}
