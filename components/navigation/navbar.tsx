import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavbarProps = {
  bgClass: string;
  activeSection: string;
};

const Navbar: React.FC<NavbarProps> = ({ bgClass, activeSection }) => {
  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault(); // Mencegah perilaku default anchor
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${bgClass}`}>
      <div className="container mx-auto lg:px-0 px-[24px]">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center">
            <Link href="#hero" onClick={(e) => handleScrollToSection(e, 'hero')}>
              <Image
                className=""
                width={210}
                height={48}
                src="/Style=Light.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <a 
                href="#section-one" 
                onClick={(e) => handleScrollToSection(e, 'section-one')} 
                className={`font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]`}
              >
                SERVICE
              </a>
              {activeSection === 'section-one' && (
                <span className="absolute right-3 bottom-0 h-[2px] bg-white w-[50%]"></span>
              )}
            </div>
            <div className="relative">
              <a 
                href="#section-three" 
                onClick={(e) => handleScrollToSection(e, 'section-three')} 
                className={`font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]`}
              >
                PORTFOLIO
              </a>
              {activeSection === 'section-three' && (
                <span className="absolute right-3 bottom-0 h-[2px] bg-white w-[50%]"></span>
              )}
            </div>
            <div className="relative">
              <a 
                href="#section-four" 
                onClick={(e) => handleScrollToSection(e, 'section-four')} 
                className={`font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]`}
              >
                TESTIMONIALS
              </a>
              {activeSection === 'section-four' && (
                <span className="absolute right-3 bottom-0 h-[2px] bg-white w-[50%]"></span>
              )}
            </div>
            <div className="relative">
              <a 
                href="#section-five" 
                onClick={(e) => handleScrollToSection(e, 'section-five')} 
                className={`font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]`}
              >
                CLIENT
              </a>
              {activeSection === 'section-five' && (
                <span className="absolute right-3 bottom-0 h-[2px] bg-white w-[50%]"></span>
              )}
            </div>
            <div className="relative">
              <a 
                href="#section-six" 
                onClick={(e) => handleScrollToSection(e, 'section-six')} 
                className={`font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]`}
              >
                CONTACT
              </a>
              {activeSection === 'section-six' && (
                <span className="absolute right-3 bottom-0 h-[2px] bg-white w-[50%]"></span>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-in set focus:ring-white"
              aria-expanded="false"
            >
              {/* Icon for mobile menu, you can use an SVG or font icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                < path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;