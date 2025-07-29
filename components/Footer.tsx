import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="text-center font-sans font-normal text-xs text-zinc-300 mt-10 mb-4 italic">
      All Rights Reserved © {new Date().getFullYear()}. Designed & Coded by Anh
      Huynh <br />
    </div>
  );
};

export default Footer;
