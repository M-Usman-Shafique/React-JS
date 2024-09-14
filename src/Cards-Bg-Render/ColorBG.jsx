import { useState } from "react";
import Card from "./Card.jsx";
import RenderPropOptimized from './RenderProps/RenderPropOptimized.jsx'

function ColorBG() {
  const [color, setColor] = useState("black");

  return (
    <>
        <Card color={color} setColor={setColor} />
        <RenderPropOptimized />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <div style={{ display: "flex", flexWrap: "wrap", width: "85%", position: "absolute", justifyContent: "center", gap: 20, bottom: 10, backgroundColor: "white", padding: 10, borderRadius: "2rem" }}>
          <button onClick={() => setColor("yellow")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "yellow" }}>
            Yellow
          </button>
          <button onClick={() => setColor("red")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "red" }}>
            Red
          </button>
          <button onClick={() => setColor("green")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "green" }}>
            Green
          </button>
          <button onClick={() => setColor("rgb(74, 74, 168)")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "rgb(74, 74, 168)" }}>
            Blue
          </button>
          <button onClick={() => setColor("olive")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "olive" }}>
            Olive
          </button>
          <button onClick={() => setColor("cyan")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "cyan" }}>
            Cyan
          </button>
          <button onClick={() => setColor("tan")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "tan" }}>
            Brown
          </button>
          <button onClick={() => setColor("purple")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "purple" }}>
            Purple
          </button>
          <button onClick={() => setColor("white")} style={{ borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "white" }}>
            White
          </button>
          <button onClick={() => setColor("black")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, color: "white", backgroundColor: "black" }}>
            Black
          </button>
          <button onClick={() => setColor("orange")} style={{ border: "none", borderRadius: "2rem", padding: "8px 10px", fontSize: 16, backgroundColor: "orange" }}>
            Orange
          </button>
        </div>
        </div>
    </>
  );
}

export default ColorBG;
