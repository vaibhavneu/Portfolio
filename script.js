// Dark Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDarkTheme = body.classList.contains("dark-theme");
  localStorage.setItem("dark-theme", isDarkTheme);
  themeToggle.innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Check for saved theme preference
const savedTheme = localStorage.getItem("dark-theme");
if (savedTheme === "true") {
  body.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Add slide-in animation to sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});