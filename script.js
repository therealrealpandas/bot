document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer .eyebrow');

  if (footerText) {
    footerText.textContent = `TrafficerMC • ${year}`;
  }
});
