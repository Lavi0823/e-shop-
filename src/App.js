import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./component/Cart";
import Home from "./component/Home";
import ProductDetails from './component/ProductDetails'
import Products from './component/Products'
import Menu from "./Header/Menu";
import Pnf from './util/Pnf'



function App(){
  return(
    <Router>
      <Menu/>
      <ToastContainer autoClose={4000} position={'bottom-right'}/>
      <Routes>
        <Route path={`/`} element={<Home itemsPerpage={8}/>}/>
        <Route path={`/products/:catName`} element={<Products/>}/>
        <Route path={`/product/:id/category/:catName`} element={<ProductDetails/>}/>
        <Route path={`/cart`} element={<Cart/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </Router>
  )
}

export default App;
