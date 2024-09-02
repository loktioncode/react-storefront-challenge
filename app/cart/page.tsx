'use client'
import { useSelector, useDispatch } from "react-redux";

import styles from "@/components/CartPage.module.css"; // Create this CSS module
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity } from "@/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
