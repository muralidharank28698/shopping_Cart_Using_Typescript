import React, { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { Button } from "@mui/material";
import "./CartSummary.css";
import { AppState } from "../../Store/rootStore";
import { connect } from "react-redux";
import { ProductInterface } from "../../Store/product/models/Product";

interface AppProps {
  productitem: () => void;
  addtocart: () => void;
  products: ProductInterface[];
  cart: ProductInterface[];
}

const Cart = (props: AppProps) => {
  const { cart } = props;
  console.log(cart);

  // console.log(cart);
  // console.log(typeof cart);
  // console.log(cart.title);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item: any) => {
      items += item.qty;
      price += item.qty * item.price;
      console.log(typeof price);
      console.log(item.price);
    });
    // console.log(cart);

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);
  // console.log(typeof totalPrice);
  // console.log(totalPrice);
  return (
    <div>
      <div>
        {cart.map((prop) => {
          return <CartItem key={prop.id} product={prop} />;
        })}
        {/* {cart.map((item) => (
        <CartItem key={item.id} itemData={item} />
      ))} */}
        {/* <CartItem /> */}
      </div>
      <div className="CartSummary">
        <div className="CartSummary-content">
          <h4>cart summary</h4>
          <br />
          <span>Total: ({totalItems})</span>
          <br />
          <br />
          <span>$: {totalPrice}</span>
        </div>
        <div className="CartSummary-button">
          <Button color="success" variant="contained">
            Proceed to Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  // console.log(state);
  return {
    cart: state.ProductReducer.cart,
  };
};

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     cart: state.shop.cart,
//   };
// };

export default connect(mapStateToProps)(Cart);

// export default Cart;
