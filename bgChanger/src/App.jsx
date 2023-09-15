import { useState } from "react";
function App() {
  // eslint-disable-next-line no-unused-vars
  let [color, setColor] = useState("olive");
  return (
    <div
      className="w-100 h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center px-2 inset-x-0  bottom-12 py-5">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-4 py-2">
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"red"}}
          onClick={() => setColor("red")}
          >RED</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"green"}}
          onClick={() => setColor("green")}
          >GREEN</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"blue"}}
          onClick={() => setColor("blue")}
          >BLUE</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"brown"}}
          onClick={() => setColor("brown")}
          >BROWN</button>
          <button className="outline-none text-black px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"yellow"}}
          onClick={() => setColor("yellow")}
          >YELLOW</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"magenta"}}
          onClick={() => setColor("magenta")}
          >MAGENTA</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"orange"}}
          onClick={() => setColor("orange")}
          >ORANGE</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"pink"}}
          onClick={() => setColor("pink")}
          >PINK</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"purple"}}
          onClick={() => setColor("purple")}
          >PURPLE</button>
          <button className="outline-none text-white px-3 py-2 rounded-full shadow-lg"
          style={{ backgroundColor:"gray"}}
          onClick={() => setColor("gray")}
          >GRAY</button>
        </div>
      </div>
    </div>
  );
}

export default App;
