document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.setAttribute(
      "aria-expanded",
      this.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For this example, we'll just log it and show an alert
      console.log({ name, email, message });

      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }

  // Initialize animations (you can add more complex animations if needed)
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".skill-card, .project-card");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Run on load and scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);
});
