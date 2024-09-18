import { useState } from "react";

interface ServiceTagProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const ServiceTag: React.FC<ServiceTagProps> = ({
  label,
  selected,
  onSelect,
}) => {
  return (
    <button
      onClick={onSelect}
      className={`px-4 py-2 rounded-full border ${
        selected ? "bg-primary-blue text-white text-[14px] lg:text-[16px]" : "bg-white text-primary-blue text-[14px] lg:text-[16px]"
      } border-primary-blue transition`}
    >
      {label}
    </button>
  );
};

interface ServiceTagSelectorProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const ServiceTagSelector: React.FC<ServiceTagSelectorProps> = ({
  options,
  selectedOptions,
  onChange,
}) => {
  const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-[12px]">
      {options.map((option) => (
        <ServiceTag
          key={option}
          label={option}
          selected={selectedOptions.includes(option)}
          onSelect={() => handleSelect(option)}
        />
      ))}
    </div>
  );
};

export default ServiceTagSelector;