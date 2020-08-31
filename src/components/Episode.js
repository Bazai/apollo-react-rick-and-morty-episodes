import React from "react";
import "./slide.css";

const Episode = ({ data }) => {
  return (
    <div className="keen-slider__slide w-1/3 h-full">
      <div className="flex flex-col p-4 border border-black h-full">
        <h3 className="font-sans text-l text-gray-600">
          Episode: {data?.episode}
        </h3>
        <p className="text-4xl"> {data?.name} </p>
        <p className="mt-auto font-sans text-gray-800">{data?.air_date}</p>
      </div>
    </div>
  );
};

export default Episode;
