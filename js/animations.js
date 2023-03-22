/** Configura animação dos cards da seção "How can we help" */
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, {});

const helpSectionCards = [
  ...document.getElementsByClassName('help-section__card'),
];

helpSectionCards.map((card) => {
  observer.observe(card);
});
