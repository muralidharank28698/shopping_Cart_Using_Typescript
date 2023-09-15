import React from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Button } from "@mui/material";
import "./SingleItem.css";
// import vivo from "../../assets/vivo.png";
import { AppState } from "../../Store/rootStore";
import { ProductInterface } from "../../Store/product/models/Product";
import { productItem, addToCart } from "../../Store/product/ProductAction";
import { ProductReducer } from "../../Store/product/ProductReducer";
import { useHistory } from "react-router-dom";

interface AppProps {
  productitem: () => void;
  addtocart: () => void;
  products: ProductInterface[];
}

type propsType = AppProps & mapStateToPropsType & mapDispatchToPropsType;
const SingleItem = (props: propsType) => {
  // console.log(props);
  const { currentItem, addToCart } = props;
  // console.log(currentItem);
  const history = useHistory();

  if (currentItem === undefined) {
    history.push("/");
    return null;
  } else {
    return (
      <div className="singleProductContainer">
        <div className="singleProductContainer-image">
          {/* <img src={currentItem.image} alt={currentItem.title} /> */}
          <img src={currentItem.image} alt="image" />
        </div>
        <hr />
        <div className="singleProductContainerContent">
          <table>
            <tr>
              <th>Product Name:</th>
              <td>
                <h2>{currentItem.title}</h2>
              </td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>
                <p>{currentItem.des}</p>
              </td>
            </tr>
            <tr>
              <th>Price:</th>
              <td>
                <p>₹ {currentItem.price}</p>
              </td>
            </tr>
            <tr>
              <th>Memory:</th>
              <td>
                <p>{currentItem.Memory}</p>
              </td>
            </tr>
            <tr>
              <th></th>
              <td style={{ float: "right" }}>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => addToCart(currentItem.id)}
                >
                  Add To Cart
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: AppState) => {
  // console.log(state.ProductReducer.products[0]);
  // console.log(state);

  // const { todos } = state;
  return {
    currentItem: state.ProductReducer.currentItem,
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
// const mapStateToProps = (state: AppState) => {
//   console.log(state);
//   return {
//     products: state.ProductReducer.products,
//   };
// };

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     currentItem: state.shop.currentItem,
//   };
// };

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
  };
};
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
// export default SingleItem;
//
