import React from "react";
import { Text } from "../atoms/Text";

interface ExperienceCardProps {
  role: string;
  company: string;
  date: string;
  description: string;
  type: "work" | "education";
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  date,
  description,
  type,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-8 bg-[color:var(--card-bg)] border border-[color:var(--border-color)] transition-all duration-300 hover:border-[color:var(--accent-primary)] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_var(--accent-glow)]">
      {/* Icon */}
      <div className="w-12 h-12 bg-[color:var(--surface-color)] border border-[color:var(--border-color)] flex items-center justify-center shrink-0">
        <i
          className={`text-[color:var(--text-primary)] text-lg ${
            type === "work" ? "fas fa-briefcase" : "fas fa-graduation-cap"
          }`}
        ></i>
      </div>

      {/* Content */}
      <div className="flex-1">
        <Text as="h4" variant="heading-4" className="mb-1">
          {role}
        </Text>
        <Text as="p" className="text-[color:var(--accent-primary)] font-medium mb-1">
          {company}
        </Text>
        <Text as="p" variant="meta" className="mb-4">
          {date}
        </Text>
        <Text
          as="p"
          className="text-[color:var(--text-secondary)] text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
