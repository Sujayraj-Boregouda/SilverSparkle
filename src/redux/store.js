import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import favoriteSlice from "./slice/favouriteSlice";
import { loadState, saveState } from '../utils/localStorage';

const preloadedCartState = loadState('cartState');
const preloadedFavoritesState = loadState('favoritesState');

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        favorites: favoriteSlice.reducer,
    },
    preloadedState: {
        cart: preloadedCartState || {
          itemList: [],
          totalQuantity: 0,
        },
        favorites: preloadedFavoritesState || {
          favoritesItemList: [],
        },
    },
});

store.subscribe(() => {
    saveState('cartState', store.getState().cart);
    saveState('favoritesState', store.getState().favorites);
});