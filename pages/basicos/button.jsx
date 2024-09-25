function acao(params) {
  console.log("Ação!!! 1");
}

export default function button(params) {
  function acao2(params) {
    console.log("Ação!!! 2");
  }

  function acao5(e) {
    console.log(e);
  }

  return (
    <div className="">
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button onClick={acao}>Click 1</button>
      <button onClick={acao2}>Click 2</button>
      <button
        onClick={function () {
          console.log("Ação!!! 3");
        }}
      >
        Click 3
      </button>
      <button
        onClick={() => {
          console.log("Ação!!! 4");
        }}
      >
        Click 4
      </button>
      <button onClick={acao5}>Click 5</button>
      <button onClick={(e) => acao5(e.altKey)}>Click 5 2</button>
    </div>
  );
}
