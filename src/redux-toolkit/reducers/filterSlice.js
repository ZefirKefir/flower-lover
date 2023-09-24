import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: localStorage.getItem('categories') ? localStorage.getItem('categories').split(',') : [],
  shades: localStorage.getItem('shades') ? localStorage.getItem('shades').split(',') : [],
  colors: localStorage.getItem('colors') ? localStorage.getItem('colors').split(',') : [],
  format: localStorage.getItem('format') ? localStorage.getItem('format').split(',') : [],
  flowers: localStorage.getItem('flowers') ? localStorage.getItem('flowers').split(',').map(item => +item) : [],
  product: localStorage.getItem('product_id') || 'GUEHRY',
}

export const filterSLice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      if (!state.categories.includes(action.payload)) state.categories.push(action.payload);
      localStorage.setItem('categories', state.categories.join(','));
    },
    removeCategory: (state, action) => {
      const index = state.categories.indexOf(action.payload);
      if (index !== -1) state.categories.splice(index, 1);
      localStorage.setItem('categories', state.categories.join(','));
    },
    addShade: (state, action) => {
      if (!state.shades.includes(action.payload)) state.shades.push(action.payload);
      localStorage.setItem('shades', state.shades.join(','));
    },
    removeShade: (state, action) => {
      const index = state.shades.indexOf(action.payload);
      if (index !== -1) state.shades.splice(index, 1);
      localStorage.setItem('shades', state.shades.join(','));
    },
    addColor: (state, action) => {
      if (!state.colors.includes(action.payload)) state.colors.push(action.payload);
      localStorage.setItem('colors', state.colors.join(','));
    },
    removeColor: (state, action) => {
      const index = state.colors.indexOf(action.payload);
      if (index !== -1) state.colors.splice(index, 1);
      localStorage.setItem('colors', state.colors.join(','));
    },
    addFormat: (state, action) => {
      if (!state.format.includes(action.payload)) state.format.push(action.payload);
      localStorage.setItem('format', state.format.join(','));
    },
    removeFormat: (state, action) => {
      const index = state.format.indexOf(action.payload);
      if (index !== -1) state.format.splice(index, 1);
      localStorage.setItem('format', state.format.join(','));
    },
    addFlower: (state, action) => {
      if (!state.flowers.includes(action.payload)) state.flowers.push(action.payload);
      localStorage.setItem('flowers', state.flowers.join(','));
    },
    removeFlower: (state, action) => {
      const index = state.flowers.indexOf(action.payload);
      if (index !== -1) state.flowers.splice(index, 1);
      localStorage.setItem('flowers', state.flowers.join(','));
    },
    setProduct: (state, action) => {
      state.product = action.payload;
      localStorage.setItem('product_id', action.payload);
    },
    resetFilter: state => {
      state.categories.length = 0;
      state.shades.length = 0;
      state.colors.length = 0;
      state.format.length = 0;
      state.flowers.length = 0;
      localStorage.setItem('categories', '');
      localStorage.setItem('shades', '');
      localStorage.setItem('colors', '');
      localStorage.setItem('format', '');
      localStorage.setItem('flowers', '');
    }
  },
})

export const {
  addCategory, removeCategory,
  addShade, removeShade,
  addColor, removeColor,
  addFormat, removeFormat,
  addFlower, removeFlower,
  resetFilter,
  setProduct,
} = filterSLice.actions;
export default filterSLice.reducer;