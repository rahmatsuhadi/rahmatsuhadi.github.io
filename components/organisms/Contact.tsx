import React from "react";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import Link from "next/link";

interface ContactProps {
  dict: any;
}

export const Contact: React.FC<ContactProps> = ({ dict }) => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1024px] mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 animate-on-scroll">
          <Text as="span" variant="caption" className="mb-2">
            {dict["contact.subtitle"]}
          </Text>
          <Text as="h2" variant="heading-2">
            {dict["contact.title"]}
          </Text>
        </div>

        <Text as="p" className="text-2xl text-[color:var(--text-secondary)] mb-10 max-w-[600px] leading-normal animate-on-scroll">
          {dict["contact.pitch"]}
        </Text>

        {/* Contact Links */}
        <div className="flex flex-wrap gap-4 animate-on-scroll">
          <Button
            as={Link}
            href="mailto:rahmatsuhadi32@gmail.com"
            variant="primary"
            className="py-4"
          >
            <i className="fas fa-envelope text-base"></i>
            <span>{dict["contact.cta.email"]}</span>
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/rahmat-suhadi"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="py-4"
          >
            <i className="fab fa-linkedin text-base"></i>
            <span>LinkedIn</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
