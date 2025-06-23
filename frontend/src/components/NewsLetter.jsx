import React from 'react'

const NewsLetter = () => {
    const onSubmitHandler =(event)=>{
        event.preventDefault()

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gold'>Subscribe now and unlock exclusive savings!</p>
        <p className='text-gray-400 mt-3'>Subscribe now and unlock exclusive savings on your favorite styles—be the first to access limited-time offers and members-only deals.</p>
        <form onSubmit={onSubmitHandler} className=' w-full sm:w-1/2  flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required name="" id="" />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>Subscribe</button>
        </form>
      
    </div>
  )
}

export default NewsLetter
