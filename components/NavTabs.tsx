import { Link as ScrollLink, animateScroll } from "react-scroll";

interface NavTabsProps {
  href?: string;
  title: string;
  onClick?: () => void;
}

const NavTabs: React.FC<NavTabsProps> = ({ href, title, onClick }) => {
  const baseClasses =
    "block -mt-1 pb-2 mb-2 pl-3 pr-4 text-zinc-500 sm:text-1 hover:text-zinc-400 font-semibold transition-colors duration-150 cursor-pointer";

  // If custom click handler provided (e.g. Home), use button
  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {title}
      </button>
    );
  }

  // Default scroll behavior
  return (
    <ScrollLink
      to={href || ""}
      smooth={true}
      duration={800}
      offset={href === "home" ? 0 : -70}
      className={baseClasses}
    >
      {title}
    </ScrollLink>
  );
};

export default NavTabs;
