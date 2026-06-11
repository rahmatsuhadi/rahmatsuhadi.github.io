import React from "react";

interface SkillCardProps {
  iconClass: string;
  name: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ iconClass, name }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center text-center gap-4 bg-[color:var(--card-bg)] border border-[color:var(--border-color)] transition-all duration-300 hover:border-[color:var(--accent-primary)] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_var(--accent-glow)]">
      <i className={`${iconClass} text-3xl text-[color:var(--text-secondary)] transition-colors duration-300 group-hover:text-[color:var(--text-primary)]`}></i>
      <span className="text-sm font-medium text-[color:var(--text-primary)]">{name}</span>
    </div>
  );
};
