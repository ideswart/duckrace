document.addEventListener("wheel", (event) => {
  event.preventDefault();
  const direction = event.deltaY > 0 ? 1 : -1;
  const scrollPosition = window.scrollY + direction * window.innerHeight;
  window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}, { passive: false });