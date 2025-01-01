import React from "react";
import ProjectCards from "./ProjectCards";

const projectDetails = [
  {
    id: 1,
    title: "MichelinStarCat",
    description: "",
    image: "",
    tag: ["Mobile", "All"],
  },
  {
    id: 2,
    title: "RecipeBook",
    description: "",
    image: "",
    tag: ["Web", "All"],
  },
  {
    id: 3,
    title: "CineScope",
    description: "",
    image: "",
    tag: ["Web", "All"],
  },
];

export const ProjectSection = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projectDetails.map((project) => (
          <ProjectCards
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
          />
        ))}
      </div>
    </div>
  );
};
