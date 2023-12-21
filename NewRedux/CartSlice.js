import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },

    removeItems(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },
    deleteCartItem(state, action) {
        return state.filter((item) => item.id !== action.payload.id);
      },
  },
});


export const { addProductToCart, deleteCartItem, removeItems } =
  CartSlice.actions;
export default CartSlice.reducer;
