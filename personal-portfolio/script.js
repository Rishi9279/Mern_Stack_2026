// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Sticky navbar
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // Add shadow when scrolled
  if (scrollTop > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon text-gray-800"></i>';
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-400"></i>';
  }
});

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  html.classList.add("dark");
  themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-400"></i>';
} else {
  themeToggle.innerHTML = '<i class="fas fa-moon text-gray-800"></i>';
}

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add fade-in animation styles dynamically
const style = document.createElement("style");
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
