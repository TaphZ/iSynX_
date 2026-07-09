const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(35, 246, 255, 0.14), transparent 12rem),
      linear-gradient(145deg, rgba(6, 24, 30, 0.82), rgba(3, 15, 20, 0.74))
    `;
  });

  card.addEventListener("pointerleave", () => {
    card.style.background = "";
  });
});
