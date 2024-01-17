import React from "react";
import SiderBar from "./Components/Sidebar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="Product" element={<Product />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/Product/:id" element={<ProductDetails />} />
            </Route>
          </Routes>

          <SiderBar />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
