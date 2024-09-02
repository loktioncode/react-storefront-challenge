import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/cartSlice";
import styles from "./StoreCard.module.css";
import { Product } from "@/utils";

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
      </div>
      <div className={styles.productInfo}>
        <h4>{product.title}</h4>
        <p className={styles.productPrice}>${product.price}</p>
        <p>Rating: ⭐ {product.rating.rate}</p>
      </div>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default StoreCard;




