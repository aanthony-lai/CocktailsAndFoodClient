import styles from "./Navbar.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.heading}>Kuchisabishii</h1>
      <nav className={styles.navBar}>
        <div className={styles.navItem}>
          <Link to="/">
            <p>Food</p>
          </Link>
        </div>
        <div className={classNames(styles.navItem, styles.beverages)}>
          <Link to="/beverages">
            <p>Beverages</p>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/sides">
            <p>Sides</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};
