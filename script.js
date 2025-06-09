document.addEventListener('DOMContentLoaded', function() {

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const rootEl = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const isLight = rootEl.classList.contains('light-mode');
        if (isLight) {
            rootEl.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            rootEl.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Typing Effect Logic
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const words = ["Frontend Web Developer", "React.js Specialist", "UI/UX Enthusiast"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            const fullText = currentWord.substring(0, charIndex);
            typingElement.textContent = fullText;

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            const typeSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // Scroll Animation Logic
    const sections = document.querySelectorAll('.content-section');
    const options = { root: null, threshold: 0.1, rootMargin: "0px" };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});