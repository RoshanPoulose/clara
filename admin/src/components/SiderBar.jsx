import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SiderBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-gray-300 border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className="flex items-center gap-3 border-gray-300 border border-r-0 px-3 py-2 rounded-l " to="/add">
           <img className='w-5 h-5' src={assets.add_icon} alt="" />
           <p className='hidden md:block'>Add items</p>  
        </NavLink>       
         <NavLink className="flex items-center gap-3 border-gray-300 border border-r-0 px-3 py-2 rounded-l " to="/list">
           <img className='w-5 h-5' src={assets.order_icon} alt="" />
           <p className='hidden md:block'>List Items</p>  
        </NavLink>
         <NavLink className="flex items-center gap-3 border-gray-300 border border-r-0 px-3 py-2 rounded-l " to="/order">
           <img className='w-5 h-5' src={assets.order_icon} alt="" />
           <p className='hidden md:block'>Order</p>  
        </NavLink>  
          
      </div>       
    </div>  
  )  
}          
                                                           
export default SiderBar  
    