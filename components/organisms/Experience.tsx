import React from "react";
import { ExperienceCard } from "../molecules/ExperienceCard";
import { SkillCard } from "../molecules/SkillCard";

interface ExperienceProps {
  dict: any;
}

export const Experience: React.FC<ExperienceProps> = ({ dict }) => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "PT. Daya Gagas Internasional",
      date: "Agustus 2025 - Desember 2025",
      description: dict["exp.work1.desc"],
      type: "work" as const,
    },
    {
      role: "Full Stack Developer",
      company: "PT. Carakan Sadhana Dirgantara",
      date: "September 2021 - Juli 2025",
      description: dict["exp.work2.desc"],
      type: "work" as const,
    },
    {
      role: "Information Technology",
      company: "Universitas AMIKOM Yogyakarta",
      date: "2023 - Sekarang",
      description: dict["exp.edu.desc"],
      type: "education" as const,
    },
  ];

  const skillCategories = [
    {
      title: dict["skills.frontend"],
      skills: [
        { iconClass: "devicon-nextjs-plain", name: "Next.js" },
        { iconClass: "devicon-nuxtjs-plain", name: "Nuxt.js" },
        { iconClass: "devicon-laravel-original", name: "Laravel" },
        { iconClass: "devicon-codeigniter-plain", name: "CodeIgniter" },
        { iconClass: "devicon-tailwindcss-original", name: "Tailwind CSS" },
      ],
    },
    {
      title: dict["skills.backend"],
      skills: [
        { iconClass: "devicon-nodejs-plain", name: "Node.js" },
        { iconClass: "devicon-mysql-plain", name: "MySQL" },
        { iconClass: "devicon-postgresql-plain", name: "PostgreSQL" },
      ],
    },
    {
      title: dict["skills.tools"],
      skills: [
        { iconClass: "devicon-docker-plain", name: "Docker" },
        { iconClass: "devicon-github-original", name: "GitHub" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1024px] mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--accent-primary)] mb-2 block">
            {dict["exp.subtitle"]}
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
            {dict["exp.title"]}
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-[800px] mb-24 animate-on-scroll">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              role={exp.role}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              type={exp.type}
            />
          ))}
        </div>

        {/* Skills Section */}
        <div className="animate-on-scroll">
          <div className="mb-8 text-left">
            <h3 className="font-heading text-2xl font-semibold text-[color:var(--text-secondary)] tracking-wide">
              {dict["skills.title"]}
            </h3>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-heading text-lg font-semibold text-[color:var(--text-secondary)] tracking-wide">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillCard
                      key={skillIdx}
                      iconClass={skill.iconClass}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
