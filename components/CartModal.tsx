import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart, updateQuantity } from "@/slices/cartSlice";
import styles from "@/styles/CartModal.module.css";
import { FaTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    const product = cartItems.find(item => item.id === id);
    dispatch(removeFromCart(id));
    toast.success(`${product?.title} Removed from Card!`)
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (

          <>
            <p>Your cart is empty.</p>
            <button onClick={onClose} className={styles.closeButton}>Close</button>
          </>
        ) : (
          <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className={styles.quantityButton}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className={styles.quantityButton}
                    >+</button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className={styles.removeButton}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))}
          </ul>
            <button onClick={onClose} className={styles.closeButton}>Checkout</button>
          </>
          
          
        )}
      
      </div>
    </div>
  );
};

export default CartModal;
