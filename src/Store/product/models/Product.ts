export interface ProductInterface {
  id: number;
  title: string;
  des: string;
  price: string;
  image: string;
  Memory: string;
  qty?: number;
  value?: number;
}

export interface ProductReducerInterface {
  products: ProductInterface[];
  cart: ProductInterface[];
  currentItem?: ProductInterface;
}
