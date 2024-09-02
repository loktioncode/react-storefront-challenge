'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import StoreCard from "@/components/StoreCard";
import NavBar from "@/components/NavBar";
import { Product } from "@/utils";

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const products = useSelector((state: RootState) => state.products.all_products);

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

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
            onFavoriteToggle={() => {}} // No need to toggle favorite from here
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
