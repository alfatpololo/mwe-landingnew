import Image from "next/image";
import React, { useState } from "react";

const ScrollingImages: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const images = [
    { src: "/coocaa.svg", alt: "Coocaa", width: 200, height: 72 },
    { src: "/aica.svg", alt: "Aica", width: 88, height: 72 },
    { src: "/coocaa.svg", alt: "Coocaa", width: 200, height: 72 },
    { src: "/aica.svg", alt: "Aica", width: 88, height: 72 },
  ];

  return (
    <div className="space-y-[16px]">
      {[...Array(5)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`overflow-hidden relative ${rowIndex % 2 === 0 ? "ltr" : "rtl"}`}
        >
          <div className={`flex gap-[32px] whitespace-nowrap animate-scroll`}>
            {images.map((image, index) => (
              <div
                key={`${rowIndex}-${index}`}
                className="relative flex-shrink-0 transition-transform"
                style={{
                  width: image.width,
                  height: image.height,
                  animationDuration: hoveredIndex === `${rowIndex}-${index}` ? "20s" : "10s",
                  animationPlayState: hoveredIndex === `${rowIndex}-${index}` ? "paused" : "running",
                }}
                onMouseEnter={() => setHoveredIndex(`${rowIndex}-${index}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.src}
                  alt={image.alt}
                  className={`object-cover transition-all duration-300 ${
                    hoveredIndex === `${rowIndex}-${index}` ? "grayscale-0" : "grayscale"
                  }`}
                />
              </div>
            ))}
            {/* Duplicate for smooth looping */}
            {images.map((image, index) => (
              <div
                key={`dup-${rowIndex}-${index}`}
                className="relative flex-shrink-0 transition-transform"
                style={{
                  width: image.width,
                  height: image.height,
                  animationDuration: hoveredIndex === `${rowIndex}-${index}` ? "20s" : "10s",
                  animationPlayState: hoveredIndex === `${rowIndex}-${index}` ? "paused" : "running",
                }}
                onMouseEnter={() => setHoveredIndex(`${rowIndex}-${index}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.src}
                  alt={image.alt}
                  className={`object-cover transition-all duration-300 ${
                    hoveredIndex === `${rowIndex}-${index}` ? "grayscale-0" : "grayscale"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .ltr .animate-scroll {
          animation: scroll-ltr 30s linear infinite;
        }

        .rtl .animate-scroll {
          animation: scroll-rtl 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingImages;