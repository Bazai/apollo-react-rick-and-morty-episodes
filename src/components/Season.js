import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Episode from "./Episode";

const Season = ({ number, episodes }) => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 });

  return (
    <div className="mx-8 mt-8">
      <h2 className="text-4xl font-sans">Season {number}</h2>
      <div ref={sliderRef} className="keen-slider">
        {episodes.map((ep) => (
          <Episode data={ep} key={ep.id} />
        ))}
      </div>
    </div>
  );
};

export default Season;
