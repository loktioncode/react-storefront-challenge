import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Product } from "../utils";
import styles from "./StoreCard.module.css";

interface StoreCardProps {
  product: Product;
}

const StoreCard: React.FC<StoreCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button>View Product</button>
    </div>
  );
};

export default StoreCard;
