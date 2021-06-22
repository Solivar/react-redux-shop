import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingIndex = state.products.findIndex(item => item.id === action.payload);

      if (existingIndex !== -1) {
        const product = state.products[existingIndex];
        product.quantity++;

        const newProducts = [...state.products];
        newProducts[existingIndex] = product;

        state.products = newProducts;
      } else {
        state.products = [...state.products, { id: action.payload, quantity: 1 }];
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
