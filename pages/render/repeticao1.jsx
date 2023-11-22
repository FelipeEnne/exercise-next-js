export default function repeticao1(params) {
  const lista = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3",
    "Elemento 4",
    "Elemento 5",
    "Elemento 6",
    "Elemento 7"
  ]

  // function renderLista() {
  //   const itens = []

  //   for (let i = 0; i < lista.length; i++) {
  //     itens.push(<li key={i}>{lista[i]}</li>)
  //   }

  //   return itens
  // }

  function renderLista() {
      return lista.map((n, i) => <li key={i}>{n}</li>)
  }

  return (
    <ul>
      {renderLista()}
    </ul>
  )
}