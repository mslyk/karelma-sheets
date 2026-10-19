const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("span");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.dataset.theme = theme;
  icon.textContent = theme === "dark" ? "☀" : "☾";
}

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

document.querySelectorAll('[data-status="soon"]').forEach((card) => {
  card.addEventListener("click", (event) => event.preventDefault());
});
