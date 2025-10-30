import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
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
};

const ProductReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.products.find((item) => item.id === action.payload);
      if (find) state.cartLists.push(find);
    },

    removeFromList: (state, action) => {
      return state.cartLists.filter((item) => item.id !== action.payload);
    },
  },
});

export default ProductReducer.reducer;
export const { addToCart, removeFromList } = ProductReducer.actions;
