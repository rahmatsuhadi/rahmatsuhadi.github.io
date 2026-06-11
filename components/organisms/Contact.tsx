import React from "react";

interface ContactProps {
  dict: any;
}

export const Contact: React.FC<ContactProps> = ({ dict }) => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1024px] mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--accent-primary)] mb-2 block">
            {dict["contact.subtitle"]}
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
            {dict["contact.title"]}
          </h2>
        </div>

        <p className="text-2xl text-[color:var(--text-secondary)] mb-10 max-w-[600px] leading-normal animate-on-scroll">
          {dict["contact.pitch"]}
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap gap-4 animate-on-scroll">
          <a
            href="mailto:rahmatsuhadi32@gmail.com"
            className="px-6 py-4 bg-[color:var(--text-primary)] text-[color:var(--bg-color)] border border-[color:var(--text-primary)] font-semibold text-sm inline-flex items-center gap-3 transition-all duration-300 hover:bg-[color:var(--accent-primary)] hover:border-[color:var(--accent-primary)] hover:text-black hover:-translate-y-0.5"
          >
            <i className="fas fa-envelope text-base"></i>
            <span>{dict["contact.cta.email"]}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rahmat-suhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-transparent border border-[color:var(--border-color)] text-[color:var(--text-primary)] font-semibold text-sm inline-flex items-center gap-3 transition-all duration-300 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:bg-[color:var(--accent-primary)]/5 hover:-translate-y-0.5"
          >
            <i className="fab fa-linkedin text-base"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
