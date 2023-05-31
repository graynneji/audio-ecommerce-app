import { Routes, Route } from "react-router-dom";
import Products from "../../components/products/products.component";
import ProductDetails from "../../components/product-details/product-details.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=":slug" element={<ProductDetails />} />
    </Routes>
  );
};
export default Shop;
