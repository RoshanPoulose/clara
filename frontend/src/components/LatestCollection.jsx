import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const [newProducts,setNewProducts] =useState([])
    const {products} =useContext(ShopContext)  

  
    useEffect(()=>{
    setNewProducts(products.slice(0,10))    
    },[products])
      
  return (
    <div className='my-10'>  
        <div className='text-center py-8 text-3xl'>    
            <Title text1={"New"}  text2={'Arrivals'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Explore Clyra’s latest collection featuring expertly tailored shirts and pants designed for modern men and women who value elegance, comfort, and timeless style.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                newProducts.map((item,idx)=>(
                    <ProductItem key={idx} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))  
            }                  
        </div>             
    </div>
  )    
}

export default LatestCollection
