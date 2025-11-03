import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { current } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      id: uuid(),
      type: "Plants",
      name: "Boncellensis Secullant",
      stars: 3,
      price: "34.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Cactus",
      name: "Cleistocactus",
      stars: 2,
      price: "28.00",
      offPrice: "25.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Plants",
      name: "Green Soil Lotus",
      stars: 4,
      price: "54.50",
      offPrice: "34.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Plants",
      name: "Money Plant",
      stars: 5,
      price: "23.00",
      offPrice: "20.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Plants",
      name: "Old Lady Cactus",
      stars: 3,
      price: "15.00",
      offPrice: "12.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Plants",
      name: "Piorro Quisquam",
      stars: 3,
      price: "32.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Plants",
      name: "Rattle Snake Tail",
      stars: 1,
      price: "45.00 ",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
    },
    {
      id: uuid(),
      type: "Cactus",
      name: "Star Cacuts",
      stars: 2,
      price: "34.00",
      offPrice: "32.00",
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
    },
  ],
  cartLists: [],
  totalPriceOfCartList: 0,
};

const ProductReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.products.find(
        (item) => item.id === action.payload
      );
      if (!findItem) return;

      const priceToAdd = Number(findItem.offPrice || findItem.price);

      const haveItem = state.cartLists.find(
        (item) => item.id === action.payload
      );
      if (haveItem) {
        haveItem.quantity = haveItem.quantity + 1;
        state.totalPriceOfCartList += priceToAdd;
      } else {
        state.cartLists.push({ ...findItem, quantity: 1 });
        state.totalPriceOfCartList += priceToAdd;
      }
    },
    increament(state, action) {
      const haveItem = state.cartLists.find(
        (item) => item.id === action.payload
      );
      if (!haveItem) return;
      const priceToAdd = Number(haveItem.offPrice || haveItem.price);
      haveItem.quantity += 1;
      state.totalPriceOfCartList += priceToAdd;
    },
    decrement(state, action) {
      const haveItem = state.cartLists.find(
        (item) => item.id === action.payload
      );
      if (!haveItem) return;
      const priceToAdd = Number(haveItem.offPrice || haveItem.price);
      haveItem.quantity -= 1;
      state.totalPriceOfCartList -= priceToAdd;
    },
    removeFromList: (state, action) => {
      const haveItem = state.cartLists.find(
        (item) => item.id === action.payload
      );
      if (!haveItem) return;

      const price = haveItem.offPrice || haveItem.price;
      const totalPriceProduce = price * haveItem.quantity;

      state.totalPriceOfCartList -= totalPriceProduce;
      state.cartLists = state.cartLists.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default ProductReducer.reducer;
export const { addToCart, removeFromList, increament, decrement } =
  ProductReducer.actions;
