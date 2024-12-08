document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  entry.target.classList.add('visible');
  observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });

fadeElements.forEach(element => observer.observe(element));
});