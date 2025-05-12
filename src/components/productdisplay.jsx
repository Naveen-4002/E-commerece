import React,{useContext} from 'react'
import './productdisplay.css'
import star_icon from '../assests/star_icon.png'
import star_dull_icon from '../assests/star_dull_icon.png'
import { ShopContext } from './shopContext'

const Productdisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)

    
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image}/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                

                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight,usually knitted,pullover shirt,close-fitting a round neckline and short sleeves,worn as an undershirt or outer garament.
            </div>
       
          <div className="productdisplay-right-sizes">
            <h1>select size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>Add To CART</button>
          <p className="productdisplay-right-category"><span>category:</span>Women,T-shirt,crop Top</p>
          <p className="productdisplay-right-category"><span>Tags:</span>Modern,Latest</p>
    </div>
    </div>
  )
}

export default Productdisplay