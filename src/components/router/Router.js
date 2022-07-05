import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../About'
import { MyAccount } from '../account/MyAccount'
import { Home } from '../Home'
import { CreateUser } from '../Log/CreateUser'
import { Login } from '../Log/Login'
import Products from '../Product'
import {Navigate} from './Navigate'

export const Router = () => {
  return (
    <BrowserRouter>
    <Navigate></Navigate>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='account' element={<MyAccount/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='create-user' element={<CreateUser/>}/>
            <Route path='questions' element={<About/>}/>


        </Routes>
    </BrowserRouter>
  )
}
