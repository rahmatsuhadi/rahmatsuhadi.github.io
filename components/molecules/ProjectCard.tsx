import React from "react";
import { CustomImage } from "../atoms/CustomImage";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

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
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
          className="object-contain p-4 transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>

      {/* Konten Proyek */}
      <div
        className={`flex-1 w-full flex flex-col justify-center text-left ${
          isEven ? "md:text-right md:items-end" : "md:text-left md:items-start"
        }`}
      >
        <Text as="h3" variant="heading-3" className="mb-4">
          {title}
        </Text>
        <Text as="p" variant="desc" className="mb-6">
          {description}
        </Text>

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
                <Button
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!p-0 border-none bg-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] uppercase tracking-wider font-mono text-xs"
                >
                  {liveDemoText} <i className="fas fa-external-link-alt"></i>
                </Button>
              )}
              {githubLink ? (
                <Button
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!p-0 border-none bg-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] uppercase tracking-wider font-mono text-xs"
                >
                  GitHub <i className="fab fa-github"></i>
                </Button>
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
