import React,{useState}from 'react'
import logo from '../assests/logo.png'
import cart from '../assests/cart_icon.png'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar=()=>
{
    const [menu,setmenu]=useState("Shop");
    return(
        
        <div className="navbar">
            <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
            </div>
            <ul className="navmenu">
                <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu=="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:'none'}}to='/Men'>Men</Link>{menu=="Men"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Women")}}><Link style= {{textDecoration:'none'}} to='/Women'> Women</Link>{menu=="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Kids")}}><Link style= {{textDecoration:'none'}} to='/Kids'>Kids</Link>{menu=="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>LOGIN</button></Link>
                
                <Link to='/cart'><img src={cart} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
          
        </div>        
    )
}
export default Navbar