import React from "react";
import "keen-slider/keen-slider.min.css";

import Episodes from "./components/Episodes";

function App() {
  return (
    <div className="text-center font-serif bg-white h-screen">
      <h1 className="mt-4 font-bold text-6xl text-black">The Rick and Morty</h1>
      <Episodes />
    </div>
  );
}

export default App;
