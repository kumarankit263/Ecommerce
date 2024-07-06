import React from 'react'
import Product from './products/Product'
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import DetailProduct from './utils/DetailProducts/DetailProduct'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail/:id' element={<DetailProduct/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default Pages
