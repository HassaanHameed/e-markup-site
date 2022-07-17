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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
