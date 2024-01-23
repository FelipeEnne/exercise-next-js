import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div className="" >
      <h1>Familia {props.familia}</h1>
      <Filho nome="abc" familia={props.familia} />
      <Filho nome="edr" familia={props.familia} />
      <Filho {...props} nome="abqeqc"  />
    </div>
  )
}
