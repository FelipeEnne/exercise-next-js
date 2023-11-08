export default function Estilo(props) {
  return (
    <div
      style={{
        backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
        color: props.color,
        textAlign: props.direita ? "right" : "left",
      }}
    >
      <h1>text</h1>
    </div>
  );
}
