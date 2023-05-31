import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.contexts";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import image2 from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import image3 from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import image4 from "../../assets/product-yx1-earphones/desktop/image-product.jpg";
import image5 from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import image6 from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import "./products.style.css";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const arr = [image1, image2, image3, image4, image5, image6];
  console.log(products);

  return (
    <>
      <div className="head-shop">
        <h1>SHOP ALL</h1>
      </div>
      <div className="pro">
        {products.map((product, idx) => (
          <Link to={product.slug}>
            <div className="product-card-container">
              <img className="product-image" src={arr[idx]} alt="circle" />
              <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">${product.price}</span>
              </div>
              <Button
                buttonType="inverted"
                // onClick={addProductToCart}
              >
                Add to cart
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
