import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    wishlistItems: [],
    wishlistTotalQuantity: 0,
    wishlistTotalAmount: 0
};
const wishlistSclice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addTOWishlist(state, action) {
            const itemIndex = state.wishlistItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0)
            {
                state.wishlistItems[itemIndex].wishlistTotalQuantity += 1;
            }
            else
            {

                const tempList = { ...action.payload, wishlistTotalQuantity: 1 };
                state.wishlistItems.push(tempList);
            }
        }
    }
});
export const { addTOWishlist } = wishlistSclice.actions;
export default wishlistSclice.reducer;