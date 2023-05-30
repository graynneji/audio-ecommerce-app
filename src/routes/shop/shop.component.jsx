import { Routes, Route } from "react-router-dom";
import Products from "../../components/products/products.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Products />} />
      {/* <Route path=":category" element={<Category />} /> */}
    </Routes>
  );
};
export default Shop;
