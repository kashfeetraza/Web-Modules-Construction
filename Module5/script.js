// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Hero tabs
const heroTabs = document.querySelectorAll(".heroTab");
heroTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    heroTabs.forEach(b => {
      b.classList.remove("bg-red-600", "text-white");
      b.classList.add("text-slate-700");
    });
    btn.classList.add("bg-red-600", "text-white");
    btn.classList.remove("text-slate-700");
  });
});

// Video tabs + play demo
const vidTabs = document.querySelectorAll(".vidTab");
vidTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    vidTabs.forEach(b => {
      b.classList.remove("bg-red-600", "text-white");
      b.classList.add("text-slate-700");
    });
    btn.classList.add("bg-red-600", "text-white");
    btn.classList.remove("text-slate-700");
  });
});

const playBtn = document.getElementById("playBtn");
const videoMsg = document.getElementById("videoMsg");
playBtn?.addEventListener("click", () => {
  videoMsg.classList.remove("hidden");
  setTimeout(() => videoMsg.classList.add("hidden"), 1800);
});