import { useState } from "react";

interface CompanySizeTagProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const CompanySizeTag: React.FC<CompanySizeTagProps> = ({
  label,
  selected,
  onSelect,
}) => {
  return (
    <button
      onClick={onSelect}
      className={`px-4 py-2 rounded-full border ${
        selected ? "bg-primary-blue text-white" : "bg-white text-primary-blue"
      } border-primary-blue transition`}
    >
      {label}
    </button>
  );
};

interface CompanySizeSelectorProps {
  options: string[];
  selectedOption: string | null;
  onChange: (selected: string) => void;
}

const CompanySizeSelector: React.FC<CompanySizeSelectorProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const handleSelect = (option: string) => {
    if (selectedOption === option) {
      onChange(""); // Reset selection if the same option is clicked
    } else {
      onChange(option); // Select a new option
    }
  };

  return (
    <div className="flex flex-wrap gap-[16px]">
      {options.map((option) => (
        <CompanySizeTag
          key={option}
          label={option}
          selected={selectedOption === option}
          onSelect={() => handleSelect(option)}
        />
      ))}
    </div>
  );
};

export default CompanySizeSelector;