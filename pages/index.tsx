import { useEffect, useState } from "react";
import Navbar from "@/components/navigation/navbar";
import HeroSection from "@/components/sections/herosection";
import SectionOne from "@/components/sections/sectionone";
import SectionTwo from "@/components/sections/sectiontwo";
import SectionThree from "@/components/sections/sectionthree";
import SectionFour from "@/components/sections/sectionfour";
import SectionFive from "@/components/sections/sectionfive";
import SectionSix from "@/components/sections/sectionsix";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [navbarBg, setNavbarBg] = useState<string>("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const sectionTwo = document.getElementById("section-two");
      const scrollPosition = window.scrollY;

      if (sectionTwo) {
        const sectionTwoTop = sectionTwo.offsetTop;

        // Change navbar background when reaching section-two
        if (scrollPosition >= sectionTwoTop - 50) {  // Adjust for small offset
          setNavbarBg("bg-primary-blue"); // Make sure this class has proper background color
        } else {
          setNavbarBg("bg-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fast and responsive section scroll snapping
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      if (scrollTimeout) return;

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Find the current section based on scroll position
        const currentSection = Array.from(sections).find((section) => {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          return (
            scrollPosition >= sectionTop - windowHeight / 4 && 
            scrollPosition < sectionTop + section.clientHeight - windowHeight / 4
          );
        });

        if (currentSection) {
          // Scroll to the current or next section faster
          currentSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Faster timeout for more responsive scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <Navbar bgClass={navbarBg} />
      <HeroSection />
      <SectionOne />
      <section id="section-two">
        <SectionTwo />
      </section>
      <section id="section-three">
        <SectionThree />
      </section>
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}