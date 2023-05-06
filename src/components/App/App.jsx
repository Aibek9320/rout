import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Contacts from "../../pages/Contacts";
import Product from "../../pages/Product";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/products/:id" element={<Product/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
