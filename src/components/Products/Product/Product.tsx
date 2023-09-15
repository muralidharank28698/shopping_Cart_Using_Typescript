import React from "react";
import { Button, Rating, Stack } from "@mui/material";
import { ProductInterface } from "../../../Store/product/models/Product";
import {
  loadCurrentItem,
  addToCart,
} from "../../../Store/product/ProductAction";

import "./Product.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

interface productProps {
  product: ProductInterface;
}

type PropType = productProps & MapDispatchToPropsType;

const Product = (props: PropType) => {
  const { product, loadCurrentItem, addToCart } = props;
  // console.log(props);

  const history = useHistory();
  return (
    <div className="productSingleContainer">
      <div className="productSingleContainerImage">
        <img src={product.image} alt={product.title}></img>
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
        <Stack spacing={2} marginTop="10px" className="stack">
          <Rating precision={0.5} size="medium" color="secondary" value={4} />
        </Stack>
        <Stack spacing={2} direction="row" className="Btns">
          <Button
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => {
              loadCurrentItem(product);
              history.push("/SingleItem");
            }}
          >
            view Item
          </Button>
          <Button
            color="success"
            size="small"
            variant="contained"
            onClick={() => addToCart(product.id)}
          >
            Add To Cart
          </Button>
        </Stack>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  // console.log(state);
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
    loadCurrentItem: (item: ProductInterface) =>
      dispatch(loadCurrentItem(item)),
  };
};

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export default connect(null, mapDispatchToProps)(Product);
// export default Product;
