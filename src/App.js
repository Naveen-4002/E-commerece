import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shopcategory from './components/Shopcategory'
import Shop from './components/Shop'
import Cart from './components/cart'
import LoginSignup from './components/loginSignup'
import Footer from './components/footer'
import men_banner from './assests/banner_mens.png'
import women_banner from './assests/banner_women.png'
import kid_banner from './assests/banner_kids.png'
import shopContextProvider from './components/shopContext';
import Product from './components/product'


const App=()=>
{
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<Shopcategory banner={men_banner} category="Men"/>}/>
        <Route path='/Women' element={<Shopcategory banner={women_banner} category="Women"/>}/>
        <Route path='/Kids' element={<Shopcategory  banner={kid_banner} category="Kid"/>}/>
        <Route path="product/:productId" element={<Product/>}>
       
        </Route>
        <Route path='/Cart' element={<Cart/>}>
        </Route>
        <Route path='/Login' element={<LoginSignup/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}
export default App