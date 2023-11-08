import styles from "./integracao2.module.css";

export default function integracao(params) {
  return (
    <div id={styles.intergracao2}>
      <div className={styles.vermelha}>Texto #01</div>
      <div className={styles.azul}>Texto #03</div>
      <div className={styles.branco}>Texto #02</div>
    </div>
  )
}