import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
};

export default NavBar;
