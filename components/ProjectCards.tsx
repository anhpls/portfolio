import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardsProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  pageUrl: string;
  tags: string[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  pageUrl,
  tags,
}) => {
  return (
    <>
      <div>
        <div
          className="h-80 md:h-80 rounded-t-xl relative group/card "
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-zinc-400 bg-opacity-0 hidden group-hover/card:flex group-hover/card:bg-opacity-60  group-hover/card:rounded-t-xl transition-all duration-500">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-white transition-colors duration-500 hover:border-zinc-300 group/link"
            >
              <CodeBracketIcon className="h-9 w-9 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-black duration-500" />
            </Link>
            <Link
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 ml-6 border-2 relative rounded-full border-white transition-colors duration-500 hover:border-zinc-300 group/link"
            >
              <EyeIcon className="h-9 w-9  text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-black duration-500" />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl bg-zinc-800 py-6 px-4 max-h-36 ">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="font-medium text-gray-500 text-wrap line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
