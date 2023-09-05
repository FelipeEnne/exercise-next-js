//JSX
export default function lista1() {  
  const conteudo = (
    <div>
      {gerarLista()}
    </div>
  );

  return conteudo;
}

function gerarLista(final = 10) {
  let spans = []
  for (let i = 0; i < final; i++) {
    spans.push(<span>{i}, </span>)
  }

  return (
    spans
  )
}