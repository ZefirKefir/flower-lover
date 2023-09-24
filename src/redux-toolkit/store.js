import { configureStore } from "@reduxjs/toolkit";

import filterSLice from './reducers/filterSlice';
import listSlice from "./reducers/listSlice";
import cartSlice from "./reducers/cartSlice";
import summarySlice from "./reducers/summarySlice";

export const store = configureStore({
  reducer: {
    filter: filterSLice,
    lister: listSlice,
    carter: cartSlice,
    summary: summarySlice,
  },
})