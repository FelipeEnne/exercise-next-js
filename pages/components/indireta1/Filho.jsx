export default function Filho(props) {
  console.log(props.talk);

  return (
    <div className="">
      <h1>Filho</h1>
      <button onClick={(e) => props.talk(e)}>talk with dad - e</button>
      <button onClick={() => props.talk("Passei no ENEM", "top")}>
        talk with dad - Passei no ENEM
      </button>
    </div>
  );
}
