import { Navbar } from "../components/Navbar";
import styles from "./Sides.module.css"

export const Sides = () => {
  const numbers = [1, 2, 3, 4, 5, 6]

  return (
    <main>
      <Navbar />
      <section className={styles.productContainer}>
        <div className={styles.categoryBar}>Category</div>
        {numbers.map(() => (
          <div className={styles.productCard}></div>
        ))}
      </section>
    </main>
  );
};
