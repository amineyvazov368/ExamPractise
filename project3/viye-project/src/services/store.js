import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { footAPI } from "./ProductQuerySlice"

export const store = configureStore({
  reducer: {

    [footAPI.reducerPath]: footAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footAPI.middleware),
})


setupListeners(store.dispatch)


export default store;