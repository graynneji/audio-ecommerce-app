import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/product.contexts";
import "./speaker.style.css";
// import { ReactComponent as PatternCircle } from '../../assets/home/desktop/pattern-circles.svg'
import image from "../../assets/home/desktop/image-speaker-zx9.png";
import Button from "../button/button.component";
import image2 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import image3 from "../../assets/home/desktop/image-earphones-yx1.jpg";
import image4 from "../..//assets/shared/desktop/image-best-gear.jpg";

const Speaker = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  const filteredProducts = products.filter((filter) => {
    if (filter.category === "speakers") return filter;
  });
  console.log(filteredProducts);
  return (
    <>
      {/* <figure className="speaker-main-container"> */}
      {filteredProducts
        .filter((_, idx) => idx === 1)
        .map(({ name, description }) => (
          <div className="speaker-container">
            <img className="speaker-image" src={image} alt="circle" />
            <div className="speaker-content">
              <span className="speaker-name">{name.toUpperCase()}</span>
              <span className="speaker-description">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </span>
              <Button>SEE PRODUCT</Button>
            </div>
          </div>
        ))}
      {/* </figure> */}
      {filteredProducts
        .filter((_, idx) => idx === 0)
        .map(({ name }) => (
          <div className="speaker-zx7-container">
            <picture className="speaker-zx7">
              <img className="zx7" src={image2} alt="speaker-zx7" />
            </picture>
            <div className="zx7-details">
              <div className="wrapper">
                <span className="name-zx7">{name.toUpperCase()}</span>
                <Button buttonType="inverted">SEE PRODUCT</Button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default Speaker;
