import "./cart-item.style.css";

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};
export default CartItem;
