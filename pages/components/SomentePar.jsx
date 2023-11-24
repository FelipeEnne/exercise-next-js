export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;

  return (
    <div className="">
      {numeroPar ? <span>{props.numero}</span> : null}
    </div>
  )


  // return numeroPar ? <span>{props.numero}</span> : null;



  // if(props.numero % 2 === 0) {
  //   return (
  //     <div className="">
  //       <h1>{props.numero}</h1>
  //     </div>
  //   )
  // } else {
  //   return null;
  // }
}