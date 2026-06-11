import React from "react";
import { CustomImage } from "../atoms/CustomImage";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techs: string[];
  liveLink?: string;
  githubLink?: string;
  isPrivate?: boolean;
  privateText: string;
  repoPrivateText: string;
  liveDemoText: string;
}

export const ProjectCard: React.FC<ProjectCardProps & { index: number }> = ({
  title,
  description,
  imageSrc,
  techs,
  liveLink,
  githubLink,
  isPrivate = false,
  privateText,
  repoPrivateText,
  liveDemoText,
  index,
}) => {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`flex flex-col items-center gap-8 md:gap-16 border-none bg-transparent w-full ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Gambar Proyek */}
      <div className="md:flex-[1.2] w-full h-[240px] md:h-[380px] overflow-hidden relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] bg-white/2 border border-[color:var(--border-color)] p-8 flex items-center justify-center">
        <CustomImage
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>

      {/* Konten Proyek */}
      <div
        className={`md:flex-1 w-full flex flex-col justify-center text-left ${
          isEven ? "md:text-right md:items-end" : "md:text-left md:items-start"
        }`}
      >
        <h3 className="font-heading text-3xl font-bold mb-4 text-[color:var(--text-primary)]">
          {title}
        </h3>
        <p className="text-[color:var(--text-secondary)] text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="font-sans text-xs px-3 py-1.5 bg-white/3 text-[color:var(--text-secondary)] border border-[color:var(--border-color)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`mt-6 flex gap-6 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          {isPrivate ? (
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-secondary)] flex items-center gap-2 font-mono">
              <i className="fas fa-lock"></i> {privateText}
            </span>
          ) : (
            <>
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] flex items-center gap-2 font-mono"
                >
                  {liveDemoText} <i className="fas fa-external-link-alt"></i>
                </a>
              )}
              {githubLink ? (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] flex items-center gap-2 font-mono"
                >
                  GitHub <i className="fab fa-github"></i>
                </a>
              ) : (
                <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-secondary)] flex items-center gap-2 font-mono">
                  <i className="fas fa-lock"></i> {repoPrivateText}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
