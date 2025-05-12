import React from 'react'
import './offers.css'
import exclusive_image from '../assests/exclusive_image.png'

const offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""/>
        </div>
    </div>
  )
}

export default offers