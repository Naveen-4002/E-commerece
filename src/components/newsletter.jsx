import React from 'react'
import './newsletter.css'

const newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive  offers on your Email</h1>
        <p>Subscribe to our newletter and stay uploaded</p>
        <div>
            <input type="email" placeholder="your Email id"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default newsletter