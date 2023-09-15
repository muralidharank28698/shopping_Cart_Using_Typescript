import React, { Component } from "react";
import "./Products.css";
import Product from "./Product/Product";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../../Store/rootStore";
import { productItem, addToCart } from "../../Store/product/ProductAction";
import { ProductInterface } from "../../Store/product/models/Product";

interface AppProps {
  productitem: () => void;
  addtocart: () => void;
  products: ProductInterface[];
}

const Products = (props: AppProps) => {
  const { products } = props;
  // console.log(products.title);
  return (
    <div>
      {products.map((prop) => {
        return <Product key={prop.id} product={prop} />;
      })}
      {/* <Product products={products[0]} /> */}
    </div>
  );
};

// class Products extends Component<AppProps, AppState> {
//   render(): JSX.Element {
//     return <Product />;
//   }
// }

// const mapStateToProps = (state: AppState) => ({
//   // console.log(state);
//   id: state.ProductReducer.id,
// });

const mapStateToProps = (state: AppState) => {
  // console.log(state);
  return {
    products: state.ProductReducer.products,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  productitem: () => dispatch(productItem()),
  // addtocart: () => dispatch(addToCart()),
});

// export default Products;
export default connect(mapStateToProps, mapDispatchToProps)(Products);
