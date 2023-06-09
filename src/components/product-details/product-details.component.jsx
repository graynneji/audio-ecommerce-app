import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.contexts";
import Button from "../button/button.component";
import "./product-details.style.css";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(ProductsContext);
  console.log(slug, products, "test");

  return (
    <>
      <div>
        {products
          .filter((fil, idx) => fil.slug === slug)
          .map((product) => (
            <div className="product-container" key={product.name}>
              <img
                className="product-details-image"
                src={product.image.desktop}
                alt="image"
              />
              <div className="content">
                {product.new && (
                  <span className="new-product">NEW PRODUCT</span>
                )}
                <span className="product-name">
                  {product.name.toUpperCase()}
                </span>
                <span className="product-des">{product.description}</span>
                <span className="price">$ {product.price}</span>
                <div className="add-contents">
                  <div className="selector">
                    <span>&#8722;</span>
                    <span className="quantity">0</span>
                    <span>&#43;</span>
                  </div>
                  <Button buttonType="product">ADD TO CART</Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default ProductDetails;
