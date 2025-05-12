import React,{useContext} from 'react'
import { ShopContext} from './shopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import Productdisplay from './productdisplay'
import DescriptionBox from './DescriptionBox'
import RelatedProducts from './RelatedProducts'
const Product=()=>
{
    const {all_product}=useContext(ShopContext)
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
return (
    <div>
        <Breadcrum product={product}/>
        <Productdisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>

)}
export default Product