import React from "react";
import NavTabs from "./NavTabs";

interface Link {
  title: string;
  path: string;
}

interface MobileMenuProps {
  links: Link[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  return (
    <ul className="flex p-4 md:p-0 md:flex-col md:space-x-8 mt-2">
      {links.map((link, index) => (
        <li key={index}>
          <NavTabs href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MobileMenu;
