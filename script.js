document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  const currentTheme = localStorage.getItem("theme") || "dark";
  if (currentTheme === "light") {
    htmlElement.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", function () {
    htmlElement.classList.toggle("light-mode");
    localStorage.setItem(
      "theme",
      htmlElement.classList.contains("light-mode") ? "light" : "dark"
    );
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Floating Mobile Navbar Scroll Animation
  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) {
      if (window.scrollY > 150) {
        navLinks.classList.add("show-nav");
      } else {
        navLinks.classList.remove("show-nav");
      }
    } else {
      navLinks.classList.remove("show-nav");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20; // Extra offset
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const typingElement = document.querySelector(".typing-effect");
  const typingTexts = ["Pengalaman Digital", "Aplikasi Web Modern", "Solusi Skalabel"];
  let typingIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    if (!typingElement) return;
    const currentText = typingTexts[typingIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingTexts.length;
      typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
  }
  typeText();

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    const intersectingEntries = entries.filter(entry => entry.isIntersecting);
    
    intersectingEntries.forEach((entry, index) => {
      setTimeout(() => {
        entry.target.classList.add("is-visible");
      }, index * 100); // Stagger 100ms
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const headerHeight = document.querySelector("header").offsetHeight;
      if (window.scrollY >= sectionTop - headerHeight - 100) {
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

  // Cursor Sparkle Effect
  const createSparkle = (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "cursor-sparkle";
    
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    
    const size = Math.random() * 6 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    const tx = (Math.random() - 0.5) * 40;
    const ty = (Math.random() - 0.5) * 40;
    sparkle.style.setProperty("--tx", `${tx}px`);
    sparkle.style.setProperty("--ty", `${ty}px`);
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 1500);
  };

  let lastSparkleTime = 0;
  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > 15) {
      createSparkle(e);
      lastSparkleTime = now;
    }
  });
});
