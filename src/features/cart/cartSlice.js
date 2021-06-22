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
    updateQty: (state, action) => {
      let quantity = action.payload.quantity;

      const newProducts = [...state.products];
      const product = newProducts.find(product => product.id === action.payload.id);

      if (1 > quantity) {
        quantity = 1;
      } else if (quantity > 99) {
        quantity = 99;
      }

      product.quantity = quantity;

      state.products = newProducts;
    },
  },
});

export const { addItem, updateQty } = cartSlice.actions;

export default cartSlice.reducer;
