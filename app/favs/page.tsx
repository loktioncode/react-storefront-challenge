'use client';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import StoreCard from "@/components/StoreCard";
import NavBar from "@/components/NavBar";
import { Product } from "@/utils";
import { toggleFavorite } from "@/slices/favoritesSlice";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const products = useSelector((state: RootState) => state.products.all_products);

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  const handleFavoriteToggle = (productId: number) => {
    dispatch(toggleFavorite(productId));
  };

  if (favoriteProducts.length === 0) {
    return (
      <div>
        <NavBar />
        <div>No favorite products found.</div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: "20px", 
          marginTop: "20px" 
        }}>
        {favoriteProducts.map((product: Product) => (
          <StoreCard 
            key={product.id} 
            product={product} 
            isFavorite={true}
            onFavoriteToggle={() => handleFavoriteToggle(product.id)} // Allow removing from favorites
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;

