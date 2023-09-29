import React from 'react'
import SiderBar from './Components/Sidebar'
import Header from './Components/Header'
import Home from './Components/Home'
import Features from './Components/Features'
import Product from './Components/Product'
import Shop from './Components/Shop'
import Pages from './Components/Pages'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
<>

<div className='overflow-hidden'>
<Router>
<Routes>
  <Route path="/" element={<Header />}>
    <Route index element={<Home />} />
    <Route path="Features" element={<Features />} />
    <Route path="Shop" element={<Shop />} />
    <Route path="Pages" element={<Pages />} />
    <Route path="Blog" element={<Blog />} />
    <Route path="contact" element={<Contact />} />
  
  </Route>


</Routes>
<Product/>
<SiderBar/>
  <Footer />
</Router>
</div>
</>

  )
}

export default App


