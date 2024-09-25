import Filho from "./Filho";

export default function Pai(props) {
  function talk(param1, param2) {
    console.log("Talk!!!");
    console.log(param1);
    console.log(param2);
  }

  return (
    <div className="">
      <Filho talk={talk} />
    </div>
  );
}
