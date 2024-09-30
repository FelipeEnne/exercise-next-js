import { useState } from "react";

export default function formulario() {
  const [val, setVal] = useState("");

  function change(event) {
    setVal(val + "!");
  }

  return (
    <div className="">
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={change}>!</button>
    </div>
  );
}
