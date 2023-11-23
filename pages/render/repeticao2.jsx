import lista from "@/data/lista"

export default function repeticao1(params) {


  function renderLista() {
      return lista.map(p => {
        return (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nome}</td>
            <td>{p.preco}</td>
          </tr>
        )
      })
  }

  return (
    <ul>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderLista()}
        </tbody>
      </table>
    </ul>
  )
}