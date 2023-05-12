// import { useState, useEffect } from "react";
import { Fragment } from "react";
import data from "../data/data.json";
import Header from "../header/header.component";

import "./home.style.css";

const Home = () => {
  return (
    <Fragment>
      <Header
        alt={"Hero-Image"}
        image={"https://www.linkpicture.com/q/image-hero.jpg"}
      />
      <div className="main-container">
        {data.map((datas) => (
          <div key={datas.id} className="container">
            <img src={datas.categoryImage.desktop} alt="category-images" />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
