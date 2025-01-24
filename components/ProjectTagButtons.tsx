import React from "react";

interface ProjectTagButtonsProps {
  name: string;
  onClick: (name: string) => void;
  isActive: boolean;
}

export const ProjectTagButtons: React.FC<ProjectTagButtonsProps> = ({
  name,
  onClick,
  isActive,
}) => {
  const buttonStyles = isActive
    ? "text-zinc-900 border-2 border-white transition-all duration-500 "
    : "text-zinc-500 border-2 border-transparent transition-all duration-500 hover:text-zinc-700";
  return (
    <button
      className={`${buttonStyles} rounded-full p-2 border-2}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
