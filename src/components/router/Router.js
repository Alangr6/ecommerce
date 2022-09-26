import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyAccount } from "../account/MyAccount";
import { Home } from "../Home";
import SignIn from "../Log/Login";
import Products from "../products/Products";
import { AllQuestions } from "../questions/AllQuestions";
import { CheckoutPage } from "../checkout/CheckoutPage";
import { Logo } from "../main/Logo";
import SignUp from "../Log/CreateUser";
import { ProductScreen } from "../products/ProductScreen";
import ForgotPassword from "../Log/ForgotPassword";
import { DataAccount } from "../account/DataAccount";
import { DataAddress } from "../account/DataAddress";
import { Orders } from "../account/Orders";
import { Logout } from "../account/Logout";
import { Footer } from "../main/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Logo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="account" element={<MyAccount />} />
        <Route path="account/:uid" element={<MyAccount />} />
        <Route path="create-user" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="questions" element={<AllQuestions />} />
        <Route path="checkout-page" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/account/:uid/data-account" element={<DataAccount />} />
        <Route path="/account/:uid/data-address" element={<DataAddress />} />
        <Route path="/account/:uid/orders" element={<Orders />} />
        <Route path="/account/:uid/logout" element={<Logout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


