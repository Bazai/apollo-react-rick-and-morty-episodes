import React from "react";

const Episode = ({ data }) => {
  return (
    <li>
      Season {data?.name}, {data?.air_date}
    </li>
  );
};

export default Episode;
