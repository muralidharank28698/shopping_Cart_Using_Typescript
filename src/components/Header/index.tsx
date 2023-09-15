import React, { useState, useEffect } from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../Store/rootStore";

// interface AppProps {
//   productitem: () => void;
//   addtocart: () => void;
//   products: ProductInterface[];
// }

const Header = ({ cart }: { cart: any }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item: any) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="HeaderContainer">
      <div className="HeaderContainerTopic">
        <Link to="/" className="HeaderContainerTopic-Link">
          <h1>
            <span>S</span>hopping Cart
          </h1>
        </Link>
      </div>
      <div className="HeaderContainerCart">
        <Link to="/Carts" className="HeaderContainerCartLink">
          <div className="HeaderContainerCartImageInput">
            <h3>Cart</h3>
            <ShoppingCartIcon
              style={{ color: "white", margin: "auto", padding: "10px" }}
            />
            <input type="text" value={cartCount} />
          </div>
        </Link>
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

export default connect(mapStateToProps)(Header);
// export default Header;
