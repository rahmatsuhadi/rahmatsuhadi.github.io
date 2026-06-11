import React from "react";
import { Text } from "../atoms/Text";

interface AboutProps {
  dict: any;
}

export const About: React.FC<AboutProps> = ({ dict }) => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1024px] mx-auto px-6 w-full">
        <div className="mb-16 animate-on-scroll">
          <Text as="span" variant="caption" className="mb-2">
            {dict["about.subtitle"]}
          </Text>
          <Text as="h2" variant="heading-2">
            {dict["about.title"]}
          </Text>
        </div>
        <div className="text-xl leading-relaxed text-[color:var(--text-secondary)] space-y-6 max-w-[800px] animate-on-scroll">
          <Text as="p">{dict["about.p1"]}</Text>
          <Text as="p">{dict["about.p2"]}</Text>
        </div>
      </div>
    </section>
  );
};
