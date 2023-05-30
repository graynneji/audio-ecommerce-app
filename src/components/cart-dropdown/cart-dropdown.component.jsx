import "./cart-dropdown.style.css";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      {cartItems.map((item) => {
        <CartItem key={item.id} cartItem={item} />;
      })}

      <Button>CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
