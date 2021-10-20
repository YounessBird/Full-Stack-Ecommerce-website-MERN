import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload);
      state.total += action.payload.price * action.payload.amount;
    },
    editQuantity: (state, action) => {
      let price, newAmount, oldAmount;
      const newProdState = state.product?.map((item) => {
        if (item.prodCartID != action.payload.prodCartID) {
          return item;
        } else {
          price = item.price;
          if (action.payload.type === "dec" && item.amount >= 1) {
            oldAmount = item.amount;
            newAmount = item.amount == 1 ? item.amount : item.amount - 1;
            return { ...item, amount: newAmount };
          } else {
            oldAmount = item.amount;
            newAmount = item.amount + 1;
            return { ...item, amount: newAmount };
          }
        }
      });
      return {
        ...state,
        product: newProdState,
        total: state.total + price * (newAmount - oldAmount),
      };
    },
    removeItem: (state, action) => {
      const { price, amount } = action.payload;
      const newFilteredProdList = state.product.filter(
        (item) => item.prodCartID != action.payload.prodCartID
      );
      return {
        quantity: state.quantity - 1,
        product: newFilteredProdList,
        total: state.total - price * amount,
      };
    },
  },
});
export const { addProduct, editQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

//DIFFERENT METHOD

// let price, newAmount, oldAmount;
// const { type, id } = action.payload;

// const newProductIndex = state.product.findIndex(
//   (item) => item._id === id
// );

// if (newProductIndex != -1) {
//   const newProductCopy = [...state.product];
//   const oldProduct = state.product[newProductIndex];
//   price = oldProduct.price;

//   if (type === "dec" && oldProduct.amount >= 1) {
//     oldAmount = oldProduct.amount;
//     newAmount =
//       oldProduct.amount == 1 ? oldProduct.amount : oldProduct.amount - 1;
//     const item = { ...oldProduct, amount: newAmount };
//     newProductCopy[newProductIndex] = { ...item };
//     return {
//       ...state,
//       product: newProductCopy,
//       total: state.total + price * (newAmount - oldAmount),
//     };
//   } else {
//     oldAmount = oldProduct.amount;
//     newAmount = oldProduct.amount + 1;
//     const item = {
//       ...oldProduct,
//       amount: newAmount,
//     };
//     newProductCopy[newProductIndex] = { ...item };
//     return {
//       ...state,
//       product: newProductCopy,
//       total: state.total + price * (newAmount - oldAmount),
//     };
//   }
// }
// },
