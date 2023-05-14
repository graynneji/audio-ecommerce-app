// import { useState, useEffect } from "react";
import { Fragment } from "react";
import data from "../data/data.json";
import Header from "../header/header.component";
import "./home.style.css";
import UniqueCategories from "../category/category.component";

// import category1 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
// import category2 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
// import category3 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

const Home = () => {
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
      </div>
    </Fragment>
  );
};

export default Home;
