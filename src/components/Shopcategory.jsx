import React,{useContext} from 'react'
import './shopcategory.css'
import {ShopContext} from './shopContext'
import dropdown_icon from '../assests/dropdown_icon.png'
import Item from './item'

const Shopcategory = (props) => { 
    const {all_product}=useContext(ShopContext);
    console.log(all_product)

return (
<div className="shop-category">
<img className="shopcategory-banner" src={props.banner} alt=""/>
 <div className="shopcategory-indexSort">
 <p>
 <span>Showing 1-12</span> out of 36 products
 </p>
 <div className="shopcategory-sort">
Sort by<img src={dropdown_icon} alt=""/>
 </div>
</div>
 <div className="shopcategory-products">
 {all_product && all_product.length>0?(
 all_product.map((item,i)=>(

    props.category.toLowerCase()==item.category.toLowerCase()?
         <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>:null))):(<p>No products found</p>)
       
}
 </div>
 <div className="shopcategory-loadmore">
     Explore More
</div>
 </div>
)
}

export default Shopcategory
