import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[color:var(--border-color)] mt-16 bg-[color:var(--bg-color)]">
      <div className="max-w-[1024px] mx-auto px-6 w-full flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-sm text-[color:var(--text-tertiary)] font-mono">
          &copy; 2026 Rahmat Suhadi.
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/rahmatsuhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] text-xl transition-colors duration-200"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://instagram.com/rahmatsuhadi_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] text-xl transition-colors duration-200"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rahmat-suhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] text-xl transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
