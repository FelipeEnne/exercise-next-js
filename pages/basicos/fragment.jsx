import React from "react";
export default function fragment() {  
  const conteudo1 = (
    <React.Fragment>
      <h1>H1</h1>
      <h2>H2</h2>
    </React.Fragment>
  );

  const conteudo2 = (
    <>
      <h1>H1</h1>
      <h2>H2</h2>
    </>
  );

  return conteudo1;
}