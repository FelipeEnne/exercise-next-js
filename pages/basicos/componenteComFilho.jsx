import Item from "../components/Item";
import Lista from "../components/Lista";

export default function componenteComFilho() {
  return (
    <div className="">
     <Lista>
      <Item conteudo="123"/>
      <Item conteudo="456"/>
      <Item conteudo="789"/>
     </Lista>
    </div>
  )
}