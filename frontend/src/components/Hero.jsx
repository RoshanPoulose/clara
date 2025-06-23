import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-500'>
      <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0'>
         <div className="text-[#414141] flex items-center gap-4">
            <p className='w-8 md:w-11 h-[2px] bg-gold'></p>
            <p className='font-medium text-sm md:text-base'>Our Best Seller</p>
         </div>
         <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>New Collection</h1>   
         <div className="flex items-center gap-2">
            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
            <p className='w-8 md:w-11 h-[2px] bg-gold'></p>
         </div>                 
      </div>  
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />      
    </div>
  )
}

export default Hero
