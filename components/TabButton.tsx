import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-red-500 border-b border-orange-300 transition-colors duration-200 bg-red-900 bg-opacity-5 rounded-full px-4 py-2"
    : "text-zinc-500 px-4 py-2";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-5 font-semibold hover:text-white transition-colors ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
