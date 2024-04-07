import styles from "./ProductContainer.module.css";

interface ProductContainerProps {
  children: React.ReactNode;
}

export const ProductContainer = ({ children }: ProductContainerProps) => {
  return (
    <>
      <section className={styles.productContainer}>
        {children}
      </section>
    </>
  );
};
