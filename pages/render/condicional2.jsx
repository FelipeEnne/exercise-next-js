import Se from "../components/Se";

export default function condicional1(params) {
  const n = 5
  return (
    <div className="">
      <Se test={n%2 == 0}>
        <h1>O numero {n} é par</h1>
      </Se> 
      <Se test={n%2 == 1}>
        <h1>O numero {n} é impar</h1>
      </Se> 
    </div>
  )
}