import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/cartSlice";
import styles from "./StoreCard.module.css";
import { Product } from "@/utils";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Importing icons

interface StoreCardProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({ product, isFavorite, onFavoriteToggle }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
        <div className={styles.favoriteIcon} onClick={onFavoriteToggle}>
          {isFavorite ? "❤️" : "🤍"}
        </div>
        <div className={styles.priceCircle}>${product.price}</div> {/* Price in top-right corner */}
      </div>
      <div className={styles.productInfo}>
        <h4>{product.title}</h4>
        <div className={styles.rating}>
          {Array.from({ length: 5 }, (_, index) => {
            const rating = product.rating.rate;
            if (rating >= index + 1) return <FaStar key={index} color="#ffc107" />; // Full star
            if (rating >= index + 0.5) return <FaStarHalfAlt key={index} color="#ffc107" />; // Half star
            return <FaRegStar key={index} color="#ffc107" />; // Empty star
          })}
        </div>
      </div>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default StoreCard;





