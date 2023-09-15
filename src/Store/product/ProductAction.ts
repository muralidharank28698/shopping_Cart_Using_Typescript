import {
  PRODUCT_ITEM,
  ADD_TO_CART,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
  ADJUST_QTY,
} from "./models/actions";
import { ProductInterface } from "../product/models/Product";

// action creators

export const productItem = () => ({
  type: PRODUCT_ITEM,
});

export const addToCart = (itemId: number) => ({
  type: ADD_TO_CART,
  payload: itemId,
});

export const loadCurrentItem = (item: ProductInterface) => ({
  type: LOAD_CURRENT_ITEM,
  payload: item,
});

export const removeFromCart = (item: number) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: item,
  },
});

export const adjustQty = (id: number, value: number) => ({
  type: ADJUST_QTY,
  payload: {
    id: id,
    qty: value,
  },
});
