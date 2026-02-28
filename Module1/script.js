// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Form Submit Demo
const form = document.getElementById("quoteForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e){
  e.preventDefault();
  msg.classList.remove("hidden");
  setTimeout(()=> msg.classList.add("hidden"), 3000);
});