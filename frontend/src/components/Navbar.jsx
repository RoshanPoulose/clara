import React, { useContext, useState } from 'react'                                    
import {assets} from "../assets/frontend_assets/assets.js"                
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'
const Navbar = () => {               
    const [view ,setview] =useState(false)    
    const {setShowsearch,getCartCount, navigate, token, setToken, setCartItems} =useContext(ShopContext)  
    const logout=()=>{
         navigate("/login")
        localStorage.removeItem("token")
        setToken("")
        setCartItems({})
       
        
    }                 
  return (             
    <div className='flex items-center justify-between py-2 font-medium'>
       <Link to='/'> <img className='w-36' src={assets.logo} alt="" /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1">                 
                <p>Home</p>                         
                <hr className='w-2/4 border-none h-[1.5px] bg-[#cba346]  hidden ' />
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#cba346] hidden' />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#cba346]  hidden' />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#cba346]  hidden' />    
            </NavLink>                                                                                             
        </ul>          

        <div className='flex items-center gap-6'>                                        
            <img onClick={()=>setShowsearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="Search_Icon" />
            <div className='group relative'>    
                
                <img onClick={()=> token ? null:navigate("/login")} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                {
                    token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100  text-gray-500 rounded ">
                        <p className='cursor-pointer hover:text-[#cba346] '>My Profile</p>
                        <p onClick={()=>navigate("/orders")} className='cursor-pointe  hover:text-[#cba346] '>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-[#cba346] '>Logout</p>   
                          
                    </div>  
                </div>                      
                }                                
                                     
            </div>                                                                                    
            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-[#cba346] aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setview(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>    
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${view ? "w-full":"w-0"} `}>
            <div className='flex flex-col text-gray-600 '>
                <div onClick={()=>setview(false)} className='flex items-center gap-4 pt-3'>        
                    <img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt="" />
                    <p>back</p>
                </div>     
                <NavLink onClick={()=>setview(false)} to="/" className="py-2 pl-6 border border-gray-300" >Home</NavLink>
                <NavLink  onClick={()=>setview(false)} className="py-2 pl-6 border border-gray-300" to='/collection'>Collections</NavLink>
                <NavLink onClick={()=>setview(false)} className="py-2 pl-6 border border-gray-300" to='/about'>About</NavLink>
                <NavLink onClick={()=>setview(false)} className="py-2 pl-6 border border-gray-300" to='/contact'>Contact</NavLink>
            </div>
         </div>      
    </div>
  ) 
}
         
export default Navbar
