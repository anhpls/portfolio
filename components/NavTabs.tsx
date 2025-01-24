import Link from "next/link";
interface NavTabsProps {
  href: string;
  title: string;
}

const NavTabs: React.FC<NavTabsProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block -mt-1 pb-2 mb-2 pl-3 pr-4 text-zinc-500 sm:text-1 hover:text-white font-semibold transition-colors duration-150"
    >
      {title}
    </Link>
  );
};

export default NavTabs;
