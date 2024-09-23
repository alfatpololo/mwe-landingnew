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

const sections = ["hero", "section-one", "section-two", "section-three", "section-four", "section-five", "section-six"];

export default function Home() {
  const [navbarBg, setNavbarBg] = useState<string>("bg-transparent");
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const mainElement = document.querySelector("main");

    const handleScroll = () => {
      const scrollPosition = mainElement?.scrollTop ?? 0;
      const sectionTwo = document.getElementById("section-two");

      if (sectionTwo) {
        const sectionTwoTop = sectionTwo.offsetTop;

        // Change navbar background when reaching section-two
        if (scrollPosition >= sectionTwoTop - 50) {
          setNavbarBg("bg-primary-blue");
        } else {
          setNavbarBg("bg-transparent");
        }
      }

      // Active section detection
      const currentSection = sections.find((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          return scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    mainElement?.addEventListener("scroll", handleScroll);
    return () => {
      mainElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar bgClass={navbarBg} />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="section-one">
          <SectionOne />
        </section>
        <section id="section-two">
          <SectionTwo />
        </section>
        <section id="section-three">
          <SectionThree />
        </section>
        <section id="section-four">
          <SectionFour />
        </section>
        <section id="section-five">
          <SectionFive />
        </section>
        <section id="section-six">
          <SectionSix />
        </section>
        <section>
          <Footer />
        </section>
      </main>

      {/* Dots Navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex-col space-y-[12px] hidden lg:flex">
        {sections.map((id, index) => {
          const isActive = activeSection === id;
          const isInHeroOrSectionOne = (activeSection === "hero" || activeSection === "section-one");

          return (
            <div
              key={index}
              className={`cursor-pointer ${isActive ? 'relative w-[12px] h-[30px] rounded-lg bg-primary-blue' : (isInHeroOrSectionOne ? 'w-3 h-3 rounded-full bg-white' : 'w-3 h-3 rounded-full bg-gray-400')}`}
              onClick={() => {
                const section = document.getElementById(id);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-lg border-2 border-primary-blue" style={{ width: 'calc(100% + 8px)', height: 'calc(100% + 8px)', top: '-4px', left: '-4px' }} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
