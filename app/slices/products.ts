import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsAPI } from "../services";
import { Product } from "../utils";

interface ProductsState {
  all_products: Product[];
  loading: "done" | "pending";
  error: string | null;
}


const initialState: ProductsState = {
  all_products: [],
  loading: "done",
  error: null,
};


export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  "store/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await productsAPI();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch products");
    }
  }
);

// Create the slice with typed reducers and extraReducers
export const fetchProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload }: PayloadAction<Product[]>) => {
        state.all_products = payload;
        state.loading = "done";
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.loading = "done";
        state.error = payload || "An unknown error occurred";
      });
  },
});

export default fetchProductsSlice.reducer;
