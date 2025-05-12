import React from 'react'
import data_product from '../assests/data'
import './relatedproducts.css'
import Item from './item'

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
        <h1>Related products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            </div>
    </div>
  )
}

export default RelatedProducts