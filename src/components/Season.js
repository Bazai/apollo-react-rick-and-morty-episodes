import React from "react";
import Episode from "./Episode";

const Season = ({ number, episodes }) => {
  return (
    <>
      <h2 className="text-4xl mt-4">Season {number}</h2>
      <ul>
        {episodes.map((ep) => (
          <Episode data={ep} />
        ))}
      </ul>
    </>
  );
};

export default Season;
