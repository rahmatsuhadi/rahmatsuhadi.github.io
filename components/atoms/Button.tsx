import React from "react";

interface ButtonProps {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
  className?: string;
  variant?: "primary" | "secondary" | "icon" | "nav";
  children?: React.ReactNode;
  ariaLabel?: string;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  href,
  target,
  rel,
  onClick,
  className = "",
  variant = "primary",
  children,
  ariaLabel,
  id,
}) => {
  const baseClasses = "transition-all duration-300 font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer";
  
  const variantClasses: Record<string, string> = {
    primary: "px-6 py-3 border border-[color:var(--text-primary)] bg-[color:var(--text-primary)] text-[color:var(--bg-color)] shadow-[0_4px_14px_0_var(--accent-glow)] hover:bg-[color:var(--accent-primary)] hover:border-[color:var(--accent-primary)] hover:text-black hover:shadow-[0_6px_20px_0_var(--accent-glow)] hover:-translate-y-0.5",
    secondary: "px-6 py-3 border border-[color:var(--border-color)] bg-transparent text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:bg-[color:var(--accent-primary)]/5 hover:-translate-y-0.5",
    icon: "w-12 h-12 border border-[color:var(--border-color)] bg-transparent text-[color:var(--text-primary)] flex items-center justify-center hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:bg-[color:var(--accent-primary)]/5 hover:-translate-y-0.5",
    nav: "text-sm font-medium transition-colors duration-200 flex flex-col md:flex-row items-center justify-center gap-1 max-md:text-[10px] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  // If "as" prop is customized (e.g. as={Link} from next/link)
  if (Component !== "button") {
    return (
      <Component
        id={id}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={combinedClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Component>
    );
  }

  // Handle standard anchor tag for hash/anchor links
  if (href && href.startsWith("#")) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick}
        className={combinedClasses}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // Fallback to normal button
  return (
    <button
      id={id}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
export default Button;
