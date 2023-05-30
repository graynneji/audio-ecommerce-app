// import { useState, useEffect } from "react";
import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/product.contexts";
import data from "../data/data.json";
import Header from "../header/header.component";
import { useNavigate } from "react-router-dom";
import "./home.style.css";
import UniqueCategories from "../category/category.component";
import Speaker from "../speaker/speaker-component";
import Button from "../button/button.component";
import image3 from "../../assets/home/desktop/image-earphones-yx1.jpg";
import image4 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";

// import category1 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
// import category2 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
// import category3 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

const Home = () => {
  const { products } = useContext(ProductsContext);

  //Helper class
  const navigate = useNavigate();
  const HandleCategoryClick = (name) => {
    navigate(`/product/${name}`);
  };
  // const uniqueCategories = [];
  // const uniqueCategorySet = new Set();
  // data.forEach(({ category, categoryImage: { desktop } }, index) => {
  //   if (!uniqueCategorySet.has(category)) {
  //     uniqueCategorySet.add(category);

  //     uniqueCategories.push({ category, desktop });
  //   }
  // });

  // const newDesktopValues = [
  //   "https://www.linkpicture.com/q/image-category-thumbnail-earphones.png",
  //   "https://www.linkpicture.com/q/image-category-thumbnail-headphones.png",
  //   "https://www.linkpicture.com/q/image-category-thumbnail-speakers.png",
  // ];
  // for (let i = 0; i < uniqueCategories.length; i++) {
  //   uniqueCategories[i].desktop = newDesktopValues[i];
  // }
  // console.log(uniqueCategories);

  return (
    <Fragment>
      <Header
        alt={"Hero-Image"}
        image={"https://www.linkpicture.com/q/image-hero.jpg"}
      />
      <div className="main-container">
        <UniqueCategories />
        {/* {uniqueCategories.map((category) => (
          <div key={category.category} className="container">
            <img src={category.desktop} alt="category-images" />
            <h2>{category.category}</h2>
          </div>
        ))} */}
        <Speaker />

        {products
          .filter((filEar) => filEar.category === "earphones")
          .map(({ name }) => (
            <div className="earphone-container">
              <img className="earphone" src={image3} alt={name} />
              <div className="earphone-content">
                <span className="earphone-name">{name.toUpperCase()}</span>
                <Button
                  buttonType="inverted"
                  onClick={() => HandleCategoryClick(name)}
                >
                  SEEs PRODUCT
                </Button>
              </div>
            </div>
          ))}
        <picture className="best-gear">
          <img className="image-best-gear" src={image4} alt="best gear" />
        </picture>
      </div>
    </Fragment>
  );
};

export default Home;
