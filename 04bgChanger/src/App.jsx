import { useState } from "react";
import "./App.css";

function App() {
  const [color, SetColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen min-w-min">
        <h2 className="bg-slate-600 text-white justify-center flex text-5xl py-2">
          BackGround_Changer
        </h2>
        <div
          className="w-full h-screen duration-200"
          style={{ backgroundColor: color }}
        >
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button
                onClick={() => SetColor("red")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>

              <button
                onClick={() => SetColor("green")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => SetColor("blue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => SetColor("Orange")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: "Orange" }}
              >
                Orange
              </button>
              <button
                onClick={() => SetColor("indigo")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: "indigo" }}
              >
                Indigo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
