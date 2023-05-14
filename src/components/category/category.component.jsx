import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/product.contexts";
import "./category.style.css";
import { Link } from "react-router-dom";
const UniqueCategories = () => {
  const { products } = useContext(ProductsContext);
  //   const {
  //     category,
  //     categoryImage: { desktop },
  //   } = product;
  const uniqueCategories = [];
  const uniqueCategorySet = new Set();
  products.forEach(({ category, categoryImage: { desktop } }, index) => {
    if (!uniqueCategorySet.has(category)) {
      uniqueCategorySet.add(category);

      uniqueCategories.push({ category, desktop });
    }
  });

  const newDesktopValues = [
    "https://www.linkpicture.com/q/image-category-thumbnail-earphones.png",
    "https://www.linkpicture.com/q/image-category-thumbnail-headphones.png",
    "https://www.linkpicture.com/q/image-category-thumbnail-speakers.png",
  ];
  for (let i = 0; i < uniqueCategories.length; i++) {
    uniqueCategories[i].desktop = newDesktopValues[i];
  }
  console.log(uniqueCategories);

  return (
    <div className=" category-container">
      {uniqueCategories.map((category) => (
        <div keys={category.category} className="category-card">
          <img
            src={category.desktop}
            alt="category-images"
            className="category-images"
          />
          <div className="category-details">
            <h2 className="category-name">{category.category.toUpperCase()}</h2>
            <Link className="shop-name" to={`/${category.category}`}>
              SHOP
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniqueCategories;
