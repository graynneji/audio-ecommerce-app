import { Fragment } from "react";

import "./header.style.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <div className="hero-content">
          <h3 className="header-text">NEW PRODUCT</h3>
          <h1 className="main-header-text">
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p className="header-content">
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music
            <br /> enthusiast.
          </p>
          <button className="btn hero-btn">SEE PRODUCT</button>
        </div>
        <img className="image-hero" alt={props.alt} src={props.image} />
      </div>
    </Fragment>
  );
};
export default Header;
