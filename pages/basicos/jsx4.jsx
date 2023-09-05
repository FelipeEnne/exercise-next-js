//JSX
export default function JSX4() {
  const sub = "subtitulo"
  
  const conteudo = (
    <div>
      <h1>JSX #04</h1>
      <h2>{sub}</h2>
      <h2>{3*3}</h2>
      <h2>{Math.max(1,100)}</h2>
    </div>
  );

  return conteudo;
}