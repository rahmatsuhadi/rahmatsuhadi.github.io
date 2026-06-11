import React from "react";
import { ProjectCard } from "../molecules/ProjectCard";

interface ProjectsProps {
  dict: any;
}

export const Projects: React.FC<ProjectsProps> = ({ dict }) => {
  const projectsData = [
    {
      title: "Khayangan",
      description: dict["project.khayangan.desc"],
      imageSrc: "/project/project-one.webp",
      techs: ["Next.js", "Tailwind", "GraphQL"],
      isPrivate: true,
    },
    {
      title: "Parisada",
      description: dict["project.parisada.desc"],
      imageSrc: "/project/project-two.webp",
      techs: ["React", "WebRTC", "REST API"],
      liveLink: "https://parisada.id/",
    },
    {
      title: "Panenin",
      description: dict["project.panenin.desc"],
      imageSrc: "/project/project-three.webp",
      techs: ["Next.js", "Tailwind"],
      isPrivate: true,
    },
    {
      title: "L'Bunga Kita Florist",
      description: dict["project.florist.desc"],
      imageSrc: "/project/project-florist.webp",
      techs: ["Next.js", "Tailwind"],
      liveLink: "https://florist-one.vercel.app/",
      githubLink: "https://github.com/rahmatsuhadi/florist-web",
    },
    {
      title: "Taman Budaya",
      description: dict["project.tby.desc"],
      imageSrc: "/project/project-tamanbudaya.webp",
      techs: ["Yii 2", "Bootstrap", "MySQL"],
      liveLink: "https://tby.jogjaprov.go.id/reservasi/gedung/index",
    },
    {
      title: "SlemanMart",
      description: dict["project.slemanmart.desc"],
      imageSrc: "/project/project-eight.webp",
      techs: ["Next.js", "Tailwind", "REST API"],
      liveLink: "https://slemanmart.slemankab.go.id/",
      githubLink: "https://github.com/rahmatsuhadi/umse",
    },
    {
      title: "Kanti Arta",
      description: dict["project.kantiarta.desc"],
      imageSrc: "/project/project-kanti-arta.webp",
      techs: ["React Vite", "Tailwind", "Dixie js"],
      liveLink: "https://kantiarta.vercel.app/",
      githubLink: "https://github.com/rahmatsuhadi/personal-finance",
    },
    {
      title: "Mocky",
      description: dict["project.mocky.desc"],
      imageSrc: "/project/project-mocky.webp",
      techs: ["Next Js", "Elysia Js", "Tailwind", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/rahmatsuhadi/moky",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1024px] mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--accent-primary)] mb-2 block">
            {dict["projects.subtitle"]}
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
            {dict["projects.title"]}
          </h2>
        </div>

        {/* Project Grid */}
        <div className="flex flex-col gap-24 animate-on-scroll">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              techs={project.techs}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              isPrivate={project.isPrivate}
              privateText={dict["project.internal"]}
              repoPrivateText={dict["project.privaterepo"]}
              liveDemoText={dict["project.livedemo"]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
