import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/HomeMain";
import Products from "../products/Products";
import { AllQuestions } from "../questions/AllQuestionsComponent";
import { CheckoutPage } from "../checkout/CheckoutPage";
import { Logo } from "../main_components/Logo";
import { ProductScreen } from "../products/ProductScreen";
import ForgotPassword from "../Log/ForgotPassword";
import { DataAccount } from "../account/DataAccount";
import { Logout } from "../account/Logout";
import { Footer } from "../main_components/Footer";
import CreateUser from '../Log/CreateUser'
import Login from '../Log/Login'

export const Router = () => {
  return (
    <BrowserRouter>
      <Logo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="login" element={<Login />} />
        <Route path="questions" element={<AllQuestions />} />
        <Route path="checkout-page" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/account/:uid/data-account" element={<DataAccount />} />
     
        <Route path="/account/:uid/logout" element={<Logout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


