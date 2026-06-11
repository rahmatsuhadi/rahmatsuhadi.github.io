import React from "react";

interface AboutProps {
  dict: any;
}

export const About: React.FC<AboutProps> = ({ dict }) => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1024px] mx-auto px-6 w-full">
        <div className="mb-16 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--accent-primary)] mb-2 block">
            {dict["about.subtitle"]}
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
            {dict["about.title"]}
          </h2>
        </div>
        <div className="text-xl leading-relaxed text-[color:var(--text-secondary)] space-y-6 max-w-[800px] animate-on-scroll">
          <p>{dict["about.p1"]}</p>
          <p>{dict["about.p2"]}</p>
        </div>
      </div>
    </section>
  );
};
