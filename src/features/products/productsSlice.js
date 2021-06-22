import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: [],
    categories: [],
    filter: '',
  },
  reducers: {
    addAll: (state, action) => {
      const categories = [];

      action.payload.forEach(product => {
        if (!categories.find(category => category === product.category)) {
          categories.push(product.category);
        }
      });

      state.categories = categories;
      state.all = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addAll, setFilter } = productsSlice.actions;

export default productsSlice.reducer;
