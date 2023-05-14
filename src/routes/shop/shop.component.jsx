import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.contexts";

const Shop = () => {
  const images = require.context("../../assets/", true);
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <div>
              <h1>{product.name}</h1>
              <div>
                {/* <img src={images(`${product.image.desktop}`)} alt="My albbb" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
