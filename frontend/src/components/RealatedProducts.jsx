import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RealatedProducts = ({category,subCategory}) => {
    const {products} =useContext(ShopContext)
    const [related,setRelated] = useState([])
    useEffect(()=>{
        if(products.length>0){        
           let productCopy=products.slice()
           productCopy=productCopy.filter((item) =>category === item.category)
           productCopy=productCopy.filter((item)=>subCategory ===item.subCategory)          
           setRelated(productCopy.slice(0,5))      
        }                       
    },[products])                                 
  return (            
    <div className='my-24'>      
        <div className='text-center text-3xl py-2'>      
            <Title text1={'Realated'} text2={'Products'} />
            
        </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
             {related.map((item,idx)=>(
                <ProductItem key={idx} id={item._id} name={item.name} image={item.image} price={item.price} />  
             ))}  
          </div>
                                                  
    </div>  
  )
}          

export default RealatedProducts
