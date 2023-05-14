// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./components/home/home.component";
import Earphones from "./routes/earphones/earphones.component";
import Headphones from "./routes/headphones/headphones.component";
import Speakers from "./routes/speakers/speakers.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
