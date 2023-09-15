import React, { useState } from "react";
import "./CartItem.css";
import { Button, Stack, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductInterface } from "../../../Store/product/models/Product";
import {
  removeFromCart,
  adjustQty,
} from "../../../Store/product/ProductAction";
import { connect } from "react-redux";

interface productProps {
  product: ProductInterface;
  removeFromCart: any;
  adjustQty: any;
}
// interface AppProps {
//   productitem: () => void;
//   addtocart: () => void;
//   cart: ProductInterface[];
// }
type PropType = productProps;

const CartItem = (props: productProps) => {
  const { product, removeFromCart, adjustQty } = props;

  // const { cart } = props;
  // console.log(product.title);

  // console.log(itemData);
  // console.log(itemdata.title);
  const [input, setInput] = useState(product.qty);

  const onChangeHandler = (e: any) => {
    // console.log(e.target.value);
    setInput(e.target.value);
    adjustQty(product.id, e.target.value);
  };

  return (
    <div className="productSingleContainer">
      <div className="productSingleContainerImage">
        <img src={product.image} alt={product.title} />
      </div>
      <hr />
      <div className="productSingleContainerContents">
        <h2>
          <span>Model Name:</span> {product.title}
        </h2>
        <p>
          <span>Description:</span> {product.des}
        </p>
        <p>
          <span>M.R.P.:</span> {product.price}
        </p>
        <p>
          <span>Memory Storage:</span> {product.Memory}
        </p>
        <div className="rating">
          <Stack spacing={2} marginTop="10px">
            <Rating precision={0.5} size="small" color="secondary" value={4} />
          </Stack>
          <input
            type="number"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <Stack spacing={2} direction="row" className="Btns">
          <Button
            color="warning"
            size="small"
            variant="contained"
            onClick={() => removeFromCart(product.id)}
          >
            remove
          </Button>
        </Stack>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    adjustQty: (id: number, value: number) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
// export default CartItem;
