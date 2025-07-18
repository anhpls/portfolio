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
  livePreview?: boolean;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  pageUrl,
  tags,
  livePreview,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-md bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="h-80 md:h-80 relative group/card"
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-zinc-400 bg-opacity-0 hidden group-hover/card:flex group-hover/card:bg-opacity-60 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-white transition-colors duration-500 hover:border-zinc-300 group/link"
          >
            <CodeBracketIcon className="h-9 w-9 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-zinc-300 duration-500" />
          </Link>
          {livePreview && (
            <Link
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 ml-6 border-2 relative rounded-full border-white transition-colors duration-500 hover:border-zinc-300 group/link"
            >
              <EyeIcon className="h-9 w-9 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-zinc-300 duration-500" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-black text-center py-6 px-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="font-medium text-gray-500 text-wrap line-clamp-2 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCards;
