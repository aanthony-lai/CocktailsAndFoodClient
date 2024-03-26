import { Navbar } from "../components/Navbar";
import styles from "./Cart.module.css";

export const Cart = () => {
  return (
    <main>
      <Navbar />
      <section className={styles.cartContainer}>
        <div className={styles.cartItem}>

        </div>
      </section>
    </main>
  );
};
