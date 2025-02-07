import { Link as ScrollLink } from "react-scroll";

interface NavTabsProps {
  href: string;
  title: string;
}

const NavTabs: React.FC<NavTabsProps> = ({ href, title }) => {
  return (
    <ScrollLink
      to={href.replace("", "")}
      smooth={true}
      duration={800}
      offset={href === "home" ? 0 : -70} // Adjust for navbar height if needed
      className="block -mt-1 pb-2 mb-2 pl-3 pr-4 text-zinc-500 sm:text-1 hover:text-zinc-400 font-semibold transition-colors duration-150 cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
};

export default NavTabs;
