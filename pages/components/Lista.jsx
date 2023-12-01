export default function Lista(props) {
  return (
    <div className="">
      <h1>Teste</h1>
      <ul style={{listStyle: "none"}}>
        {props.children}
      </ul>
    </div>
  );
}
