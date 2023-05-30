import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.contexts";
const EarphonesProducts = () => {
  const { products } = useContext(ProductsContext);
  const filterProduct = products
    .map((product) => product)
    .filter((fil) => fil.category === "earphones");
  console.log(filterProduct);
  return (
    <div className="earphones-container">
      {filterProduct.map((earphones) => (
        <div keys={earphones.id} className="earphones">
          <div>{earphones.name}</div>
        </div>
      ))}
    </div>
  );
};
export default EarphonesProducts;
