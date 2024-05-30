import { createSelector, createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0, // number of unique items
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += newItem.price * newItem.quantity;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity,
                    name: newItem.name,
                    cover: newItem.images
                });
                state.totalQuantity++; // Increment only when a new unique item is added
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemList.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.itemList = state.itemList.filter((item) => item.id !== id);
                    state.totalQuantity--; // Decrement only when a unique item is removed
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        },
        removeFromAllCart(state, action) {
            const id = action.payload;
            const itemToRemove = state.itemList.find((item) => item.id === id);

            if (itemToRemove) {
                state.itemList = state.itemList.filter((item) => item.id !== id);
                state.totalQuantity--; // Decrement for removing a unique item
            }
        }
    },
})

export const CartActions = cartSlice.actions;

export const selectTotalQuantity = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.length // Number of unique items
);

export const selectTotalPrice = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((acc, item) => acc + item.totalPrice, 0)
);

export default cartSlice;