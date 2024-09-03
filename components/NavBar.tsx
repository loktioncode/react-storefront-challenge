import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CartModal from "./CartModal";
import styles from "@/styles/NavBar.module.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">~</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/favs">Favorites</Link>
          <Link href="/cart">Page 2</Link>

          <div className={styles.cart} onClick={toggleCart}>
            <FaShoppingCart />
            {cartItemCount > 0 && <span className={styles.cartCount}>{cartItemCount}</span>}
          </div>
        </div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={toggleCart} /> {/* Render CartModal */}
    </>
  );
};

export default NavBar;




