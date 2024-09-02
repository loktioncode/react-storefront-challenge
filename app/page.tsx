'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import StoreCard from "../components/StoreCard";
import NavBar from "../components/NavBar";
import { Product } from "@/utils";
import { fetchProducts } from "@/slices/products";

const StorePage = () => {
  const dispatch = useDispatch();
  const { all_products, loading, error } = useSelector((state: RootState) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(all_products);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(all_products);
  }, [all_products]);

  const handleFilter = (criteria: string) => {
    let sortedProducts = [...all_products];
    if (criteria === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (criteria === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredProducts(sortedProducts);
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
      <div>
        <button onClick={() => handleFilter("price-high-low")}>Price: High to Low</button>
        <button onClick={() => handleFilter("a-z")}>A-Z</button>
        {/* Add category filter buttons or dropdowns here */}
      </div>
      <div>
        {filteredProducts?.map((product: Product) => (
          <StoreCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;

