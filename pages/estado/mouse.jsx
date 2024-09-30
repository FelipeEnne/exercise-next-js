import { useState } from "react";

export default function mouse(props) {
  // const arrayX = useState(0);
  // const x = arrayX[0];
  // const changeX = arrayX[1];
  const [x, changeX] = useState(0);

  const arrayY = useState(0);
  const y = arrayY[0];
  const changeY = arrayY[1];

  const estilo = {
    flexDirection: "column",
    backgroundColor: "gray",
    color: "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  function mouseMove(event) {
    changeX(event.clientX);
    changeY(event.clientY);
    console.log(event.clientX, event.clientY);
  }

  return (
    <div className="" style={estilo} onMouseMove={mouseMove}>
      <span>X {x}</span>
      <span>Y {y}</span>
    </div>
  );
}
