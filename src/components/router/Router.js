import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyAccount } from "../account/MyAccount";
import { Home } from "../Home";
import { CreateUser } from "../Log/CreateUser";
import { Login } from "../Log/Login";
import Products from "../products/Products";
import { Navigate } from "./Navigate";
import { AllQuestions } from "../questions/AllQuestions";
import { CheckoutPage } from "../checkout/CheckoutPage";
import { Logo } from "../main/Logo";

export const Router = () => {
  return (
    <BrowserRouter>
      <Logo />

      <Navigate/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="account" element={<MyAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="questions" element={<AllQuestions />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
