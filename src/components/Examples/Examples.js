import ex1 from "./e1.jpeg";
import ex2 from "./e2.jpeg";
import styles from "./Examples.module.css";

const Examples = () => {
  return (
    <section className={styles.examples}>
      <img alt="EUROSTAR hoodie" src={ex1} />
      <img alt="PARIS hoodie" src={ex2} />
    </section>
  )
}

export default Examples;