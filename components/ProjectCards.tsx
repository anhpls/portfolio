import React from "react";
import { Carousel, Card } from "./ui/cards-carousel";

const ProjectCards = ({ imageURL, title, description }) => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
      <div>
        <Carousel items={cards} />
        <div
          className="h-52 md:h-72 rounded-t-xl"
          style={{ background: `url(${imageURL})`, backgroundSize: "cover" }}
        ></div>
        <div className="text-white rounded-b-xl bg-zinc-800 py-6 px-4 ">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="font-medium text-white">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
