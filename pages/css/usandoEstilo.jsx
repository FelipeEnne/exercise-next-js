import Estilo from "../components/Estilo";

export default function usandoEstilo(params) {
  return (
    <div className="">
      <Estilo numero={2} color={"#fff"} />
      <Estilo numero={-2} direita />
    </div>
  );
}
