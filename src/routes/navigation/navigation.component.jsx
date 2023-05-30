import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.style.css";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="header">
        <div className="main-container sub-container nav-container">
          <div>
            <h3 className="logo">audiophile</h3>
          </div>
          <div className="nav-link-container">
            <Link className="nav-links" to="/">
              Home
            </Link>
            <Link className="nav-links" to="/headphones">
              Headphones
            </Link>
            <Link className="nav-links" to="/speakers">
              Speakers
            </Link>
            <Link className="nav-links" to="/earphones">
              Earphones
            </Link>
          </div>
          <div className="shop-cart">
            {currentUser ? (
              <Link className="nav-links" onClick={signOutUser}>
                {currentUser.displayName} Signout
              </Link>
            ) : (
              <Link className="nav-links" to="/auth">
                Signin
              </Link>
            )}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
