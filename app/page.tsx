'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import StoreCard from "@/components/StoreCard";
import NavBar from "@/components/NavBar";
import { Product } from "@/utils";
import { fetchProducts } from "@/slices/products";
import { toggleFavorite } from "@/slices/favoritesSlice";
import styles from "@/styles/StorePage.module.css";

const StorePage = () => {
  const dispatch = useDispatch();
  const { all_products, loading, error } = useSelector((state: RootState) => state.products);
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('a-z');

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(all_products);

    // Extract categories from products
    const uniqueCategories = Array.from(new Set(all_products.map(product => product.category)));
    setCategories(uniqueCategories);
  }, [all_products]);

  const sortProducts = (products: Product[], criteria: string) => {
    let sortedProducts = [...products];

    if (criteria === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (criteria === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "z-a") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    return sortedProducts;
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const criteria = event.target.value;
    setSortOption(criteria);

    let filteredByCategory = all_products;
    if (selectedCategory) {
      filteredByCategory = all_products.filter(product => product.category === selectedCategory);
    }

    const sortedProducts = sortProducts(filteredByCategory, criteria);
    setFilteredProducts(sortedProducts);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);

    let filteredByCategory = all_products;
    if (category) {
      filteredByCategory = all_products.filter(product => product.category === category);
    }

    const sortedProducts = sortProducts(filteredByCategory, sortOption);
    setFilteredProducts(sortedProducts);
  };

  const handleFavoriteToggle = (productId: number) => {
    dispatch(toggleFavorite(productId));
  };

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.filterContainer}>
        <div className={styles.leftFilters}>
          <select value={selectedCategory} onChange={handleCategoryChange} className={styles.filterdropdown}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.rightFilters}>
          <select value={sortOption} onChange={handleSortChange} className={styles.filterdropdown}>
            <option value="a-z">Sort by: A-Z</option>
            <option value="z-a">Sort by: Z-A</option>
            <option value="price-high-low">Sort by: Price High to Low</option>
            <option value="price-low-high">Sort by: Price Low to High</option>
          </select>
        </div>
      </div>
      <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: "20px", 
          marginTop: "20px" 
        }}>
        {filteredProducts?.map((product: Product) => (
          <StoreCard 
            key={product.id} 
            product={product} 
            isFavorite={favorites.includes(product.id)}
            onFavoriteToggle={() => handleFavoriteToggle(product.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default StorePage;


