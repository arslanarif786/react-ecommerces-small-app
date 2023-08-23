import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <button
          className="px-3 py-2 bg-red-300 rounded-lg border border-solid border-red-300 hover:bg-red-400 hover:border-red-400"
          onClick={handleClick}
        >
          Change to {walk ? "Stop" : "Walk"}
        </button>
        <h1
          style={{
            color: walk ? "darkgreen" : "darkred",
          }}
          className="mt-2"
        >
          {walk ? "Walk" : "Stop"}
        </h1>
      </div>
    </>
  );
}
