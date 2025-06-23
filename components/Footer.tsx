import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="text-center font-sans font-normal text-sm text-zinc-400 mt-10 mb-4 italic">
      Designed & Coded by Anh Huynh <br />
      All Rights Reserved © {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
