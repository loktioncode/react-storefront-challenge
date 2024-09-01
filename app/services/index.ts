import { Product } from "@/app/utils";


  const API_URL = "https://fakestoreapi.com/products";
  

  export const productsAPI = async (): Promise<Product[]> => {
    const response = await fetch(API_URL);
  
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  
    const data: Product[] = await response.json();
    return data;
  };
  
  