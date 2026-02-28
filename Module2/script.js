// Simple scroll helper for the "View Projects" button
const btn = document.getElementById("ghostBtn");
btn?.addEventListener("click", () => {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
});