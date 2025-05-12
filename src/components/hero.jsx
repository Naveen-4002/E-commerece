import React from 'react'
import './hero.css'
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import hero_image from '../assests/hero_image.png'
const Hero=()=>
{
    return(
    <div className="hero">
        <div className="hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>
        <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>collections</p>
        <p>for everyone</p>

    </div>

    <div className="hero-latest-btn">
        <div>Latest collection</div>
        <img src={arrow_icon} alt=""/>
    </div>
    </div>
    <div className="hero-right">
      <img src={hero_image} alt=""/>
      </div>
    </div>
    )
}
export default Hero