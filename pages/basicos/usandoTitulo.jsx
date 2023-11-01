import Titulo from "../components/titulo";

export default function usandoTitulo() {  
  const conteudo = (
    <>
      <Titulo principal="principal" secundario="secundario"/>
      <Titulo principal="principal1" secundario="secundario1" pequeno/>
    </>
  );

  return conteudo;
}
