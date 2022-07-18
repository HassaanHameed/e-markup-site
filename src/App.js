import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Header from "./components/general/header/Header";
import Footer from "./components/general/footer/Footer";
import LogIn from "./components/myAccount/LogIn";
import Registration from "./components/myAccount/Registration";
import ForgotPassword from "./components/myAccount/ForgotPassword";
import ErrorPage from "./components/general/error/Error404";
import Categories from "./components/categories/Categories";
import Cart from "./components/cart/Cart";
import { categoryCollection } from "./components/categories/categoryData";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = id => {
    const item = cart.find(item => item.id === id);
    console.log(item);
    if (!item) {
      const items = categoryCollection.find(item => item.id === id);
      setCart([...cart, items]);
    } else {
      console.log("item already exists");
    }
  };

  const removeCartItem = id => {
    if (cart.length > 0) {
      const newCart = cart.filter(item => item.id !== id);
      setCart(newCart);
    } else {
      console.log("Cart is empty");
    }
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/categories"
          element={<Categories addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeCartItem={removeCartItem} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
