import { type } from "os";
import { ProductInterface } from "../../product/models/Product";

export const PRODUCT_ITEM = "PRODUCT_ITEM";
export const ADD_TO_CART = "ADD_TO_CART";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";

// action types

interface productItem {
  type: typeof PRODUCT_ITEM;
}

interface addToCart {
  // payload: ProductInterface;
  payload: number;
  type: typeof ADD_TO_CART;
}

interface loadCurrentItem {
  type: typeof LOAD_CURRENT_ITEM;
  payload: ProductInterface;
}

interface removeFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: ProductInterface;
}

interface adjustQty {
  type: typeof ADJUST_QTY;
  payload: {
    id: number;
    qty: number;
  };
}

export type ProductActionTypes =
  | productItem
  | addToCart
  | loadCurrentItem
  | removeFromCart
  | adjustQty;
