import { useState } from "react";
import Image from "next/image";

const Features = ({ title, content, iconSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-secondary-grey-100 p-[16px] rounded-[12px]">
      <div className="flex gap-[12px] items-center cursor-pointer" onClick={toggleDropdown}>
        {/* Icon/Image */}
        <div>
          <Image
            className=""
            width={27}
            height={27}
            src={iconSrc}
            alt=""
          />
        </div>

        {/* Title */}
        <div className="">
          <h2 className="text-secondary-black text-[16px] font-notosans font-[600] leading-[28px]">
            {title}
          </h2>
        </div>

        {/* Dropdown Arrow Icon */}
        <div className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-[8px] px-[39px]">
          <p className="text-secondary-grey-500 text-[14px] font-notosans font-[400] leading-[24px]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Features;