import React from 'react'
import './breadcrum.css'
import arrow_icon from '../assests/arrow.png'

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className="breadcrum">
        HOME<img src={arrow_icon} alt=""/>SHOP <img src={arrow_icon} alt=""/>{product.category}<img src={arrow_icon} alt=""/>{product.name}   
         </div>
    
  )
}

export default Breadcrum