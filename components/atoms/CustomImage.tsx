import React from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fill = false,
  sizes,
}) => {
  // Pastikan path image selalu absolut atau valid next.js static link
  const normalizedSrc = src.startsWith("./") ? src.replace("./", "/") : src;

  return (
    <Image
      src={normalizedSrc}
      alt={alt}
      width={fill ? undefined : width || 400}
      height={fill ? undefined : height || 400}
      priority={priority}
      className={`${className} transition-opacity duration-300`}
      fill={fill}
      sizes={sizes}
      quality={85}
    />
  );
};
