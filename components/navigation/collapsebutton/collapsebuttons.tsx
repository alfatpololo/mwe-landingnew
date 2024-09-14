import { useState } from "react";
import Image from "next/image";

interface DropdownButtonProps {
  icon: string;
  iconwidth: number;
  iconheight: number;
  title: string;
  description: string;
  website: string;
  webtitle: string;
  isOpen: boolean;
  onClick: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  icon,
  iconwidth,
  iconheight,
  title,
  description,
  website,
  webtitle,
  isOpen,
  onClick,
}) => {
  return (
    <div className="w-full mx-auto">
      <button
        onClick={onClick}
        className={`flex justify-between border-l-[8px] items-center w-full p-2 border border-primary-blue px-[24px] py-[26px] text-gray-700 rounded-t-md ${
          isOpen ? "rounded-b-none border-b-transparent" : "rounded-md"
        }`}
      >
        <div className="flex items-center gap-[16px]">
          <Image
            width={iconwidth}
            height={iconheight}
            src={icon}
            alt=""
          />
          <span className="text-secondary-black font-notosans font-[500] text-[18px]">
            {title}
          </span>
        </div>
        <span className="ml-2">
          {isOpen ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="border border-t-0 border-l-[8px] border-primary-blue rounded-b-md px-[24px] mt-[-1px] pt-[12px] pb-[16px]">
          <p className="font-notosans font-[400] text-[16px] text-secondary-grey-500">
            {description}
          </p>
          <div className="text-right mt-4">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue font-notosans font-[500] hover:underline"
            >
              {webtitle}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="grid gap-[16px] max-h-[400px] overflow-y-scroll"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <DropdownButton
        icon="/company-icon.svg"
        iconwidth={48}
        iconheight={48}
        title="Namico"
        description="MWE memiliki portfolio yang mengesankan dari testimonial positif dari klien-klien sebelumnya. Kami percaya bawah tim MWE memiliki keahlian yang dibutuhkan untuk menciptakan website perusahaan yang sesuai dengan visi dan misi kami."
        website="https://www.namico.com"
        webtitle="www.namico.com"
        isOpen={activeIndex === 0}
        onClick={() => toggleDropdown(0)}
      />
      <DropdownButton
        icon="/company-icon.svg"
        iconwidth={48}
        iconheight={48}
        title="Other Company"
        description="Deskripsi lain tentang perusahaan ini. Tim MWE memiliki kemampuan yang luar biasa dalam menciptakan website yang sempurna."
        website="https://www.othercompany.com"
        webtitle="www.othercompany.com"
        isOpen={activeIndex === 1}
        onClick={() => toggleDropdown(1)}
      />
      <DropdownButton
        icon="/company-icon.svg"
        iconwidth={48}
        iconheight={48}
        title="Another Company"
        description="Deskripsi tambahan tentang perusahaan lain yang juga memiliki portofolio yang mengesankan."
        website="https://www.anothercompany.com"
        webtitle="www.anothercompany.com"
        isOpen={activeIndex === 2}
        onClick={() => toggleDropdown(2)}
      />
      <DropdownButton
        icon="/company-icon.svg"
        iconwidth={48}
        iconheight={48}
        title="Another Company"
        description="Deskripsi tambahan tentang perusahaan lain yang juga memiliki portofolio yang mengesankan."
        website="https://www.anothercompany.com"
        webtitle="www.anothercompany.com"
        isOpen={activeIndex === 3}
        onClick={() => toggleDropdown(3)}
      />
      <DropdownButton
        icon="/company-icon.svg"
        iconwidth={48}
        iconheight={48}
        title="Another Company"
        description="Deskripsi tambahan tentang perusahaan lain yang juga memiliki portofolio yang mengesankan."
        website="https://www.anothercompany.com"
        webtitle="www.anothercompany.com"
        isOpen={activeIndex === 4}
        onClick={() => toggleDropdown(4)}
      />
      {/* Tambahkan dropdown lainnya sesuai kebutuhan */}
    </div>
  );
};

export default DropdownList;
