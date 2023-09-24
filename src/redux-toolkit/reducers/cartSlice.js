import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: localStorage.getItem('cart') ? localStorage.getItem('cart').split(',') : [],
}

export const cartSlice = createSlice({
  name: 'carter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      localStorage.setItem('cart', state.cart.join(','));
    },
    removeFromCart: (state, action) => {
      const i = state.cart.findLastIndex(item => item === action.payload);
      state.cart.splice(i, 1);
      localStorage.setItem('cart', state.cart.join(','));
    },
    removeAllOfSort: (state, action) => {
      // const start = state.cart.findIndex(item => item === action.payload);
      // const end = state.cart.findLastIndex(item => item === action.payload);
      // state.cart.splice(start, end + 1);
      for (let i = state.cart.length - 1; i >= 0; i--) {
        const item = state.cart[i];
        item === action.payload ? state.cart.splice(i, 1) : '';
      }
      localStorage.setItem('cart', state.cart.join(','));
    },
  }
})

export const { addToCart, removeFromCart, removeAllOfSort } = cartSlice.actions;
export default cartSlice.reducer;