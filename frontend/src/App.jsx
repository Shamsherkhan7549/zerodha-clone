import React from 'react'
import{BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Landing_page/home/HomePage'
import AboutPage from './Landing_page/about/AboutPage'
import ProductPage from './Landing_page/products/ProductPage'
import PricingPage from './Landing_page/pricing/PricingPage'
import SupportPage from './Landing_page/support/SupportPage'
import Navbar from './Landing_page/Navbar'
import Footer from './Landing_page/Footer'
import Error from './Landing_page/Error'

const App = () => {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          {/* <Route path='/signup' element={<Signup/>} /> */}
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/products' element={<ProductPage/>} />
          <Route path='/pricing' element={<PricingPage/>} />
          <Route path='/support' element={<SupportPage/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App