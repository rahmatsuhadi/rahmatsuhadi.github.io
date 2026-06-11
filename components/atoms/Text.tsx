import React from "react";

type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface TextProps {
  as?: TextTag;
  variant?: "heading-1" | "heading-2" | "heading-3" | "heading-4" | "body" | "caption" | "meta" | "desc";
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  id?: string;
}

export const Text: React.FC<TextProps> = ({
  as = "p",
  variant,
  className = "",
  children,
  dangerouslySetInnerHTML,
  id,
}) => {
  const Component = as;

  // Mapping variants to match specific design styles
  const variantClasses: Record<string, string> = {
    "heading-1": "font-heading text-5xl md:text-6xl font-bold tracking-tight text-[color:var(--text-primary)] leading-tight",
    "heading-2": "font-heading text-4xl font-bold tracking-tight text-[color:var(--text-primary)]",
    "heading-3": "font-heading text-3xl font-bold text-[color:var(--text-primary)]",
    "heading-4": "font-heading text-xl font-bold text-[color:var(--text-primary)]",
    "body": "text-lg text-[color:var(--text-secondary)] leading-relaxed",
    "caption": "text-xs font-semibold uppercase tracking-widest text-[color:var(--accent-primary)] block",
    "meta": "text-xs font-mono text-[color:var(--text-tertiary)]",
    "desc": "text-[color:var(--text-secondary)] text-base leading-relaxed",
  };

  const selectedClass = variant ? variantClasses[variant] : "";

  return (
    <Component
      id={id}
      className={`${selectedClass} ${className}`.trim()}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Component>
  );
};
export default Text;
