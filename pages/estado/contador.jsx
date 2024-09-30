import { useState } from "react";

export default function contador() {
  const [val, setVal] = useState(0);

  function plus(event) {
    setVal(val + 1);
  }

  function minus(event) {
    setVal(val - 1);
  }

  return (
    <div className="">
      <h1>Cont</h1>
      <br />
      <h3>Val {val}</h3>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
