import React from 'react'
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import ProductId from './components/ProductId'
import Cart from './components/Cart'

const App = () => {
  return (<>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' index element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductId />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </>
  )
}

export default App
