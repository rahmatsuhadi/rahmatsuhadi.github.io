"use client";

import React, { useEffect } from "react";
import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";
import { About } from "../organisms/About";
import { Projects } from "../organisms/Projects";
import { Experience } from "../organisms/Experience";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";

interface HomeTemplateProps {
  dict: any;
  locale: string;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({ dict, locale }) => {
  useEffect(() => {
    // Restore scroll position after language change
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
      sessionStorage.removeItem('scrollPosition');
    }

    // 1. Sparkle Cursor Effect
    const createSparkle = (e: MouseEvent) => {
      const sparkle = document.createElement("div");
      sparkle.className = "cursor-sparkle";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      const size = Math.random() * 6 + 4;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      const tx = (Math.random() - 0.5) * 40;
      const ty = (Math.random() - 0.5) * 40;
      sparkle.style.setProperty("--tx", `${tx}px`);
      sparkle.style.setProperty("--ty", `${ty}px`);

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    };

    let lastSparkleTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSparkleTime > 15) {
        createSparkle(e);
        lastSparkleTime = now;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // 2. Parallax & Floating Background Geometry Animation
    const shapes = document.querySelectorAll(".geo-shape");
    let time = 0;
    let frameId: number;

    const animateGeometry = () => {
      time += 0.01;
      const scrollY = window.scrollY;

      shapes.forEach((shape, index) => {
        const shapeEl = shape as HTMLElement;
        const speed = (index + 1) * 0.1;
        const rotationSpeed = (index + 1) * 0.05;
        const dir = index % 2 === 0 ? 1 : -1;

        const scrollYPos = scrollY * speed * dir;
        const scrollRot = scrollY * rotationSpeed * dir;

        const floatX = Math.sin(time + index) * 40;
        const floatY = Math.cos(time + index * 2) * 40;
        const floatRot = Math.sin(time * 0.5 + index) * 20;
        const floatScale = 1 + Math.sin(time + index) * 0.15;

        shapeEl.style.transform = `translate(${floatX}px, ${
          scrollYPos + floatY
        }px) rotate(${scrollRot + floatRot}deg) scale(${floatScale})`;
      });

      frameId = requestAnimationFrame(animateGeometry);
    };
    animateGeometry();

    // 3. Scroll Transitions (IntersectionObserver)
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      intersectingEntries.forEach((entry, index) => {
        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, index * 100);
        observer.unobserve(entry.target);
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background Geometry */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden pointer-events-none bg-background">
        <div className="geo-shape w-[400px] h-[400px] -top-[10%] -right-[5%] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
        <div className="geo-shape w-[500px] h-[500px] -bottom-[15%] -left-[10%] bg-[#7000ff] [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]"></div>
        <div className="geo-shape w-[250px] h-[250px] top-[35%] left-[10%] bg-[#ff00f0] [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]"></div>
        <div className="geo-shape w-[300px] h-[300px] top-[60%] right-[5%] bg-[#00ffaa] [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]"></div>
        <div className="geo-shape w-[150px] h-[150px] top-[15%] left-[45%] bg-[#ffcc00] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"></div>
      </div>

      <Header dict={dict} locale={locale} />
      <main className="flex-1 w-full max-w-[1024px] mx-auto px-6 max-md:pb-[90px]">
        <Hero dict={dict} locale={locale} />
        <About dict={dict} />
        <Projects dict={dict} />
        <Experience dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer />
    </>
  );
};
