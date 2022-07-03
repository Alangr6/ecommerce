import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import Products from '../Product'
import {Navigate} from './Navigate'

export const Router = () => {
  return (
    <BrowserRouter>
    <Navigate></Navigate>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
        </Routes>
    </BrowserRouter>
  )
}
