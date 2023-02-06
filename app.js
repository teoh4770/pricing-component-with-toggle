const toggle = document.getElementById("toggle");
const pricing = document.getElementById("pricing");

toggle.addEventListener("change", (e) => {
  pricing.classList.toggle("show-monthly");
});
