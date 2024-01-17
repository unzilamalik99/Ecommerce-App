import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcon from './SocialIcon'
const Footer=()=> {
  return (
<footer className='bg-black text-white '>
  <div className='md:flex md:justify-between md:item-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
<h1 className='lg:text-4xl text-3xl md:mb-0 mb-5 lg:leading-normal font-semibold md:w/5'>Please Enter your Query?</h1>
<div>
  <input type="text" placeholder='Enter your phone no' className='text-slate-300 sm:w-50 w-full sm:mr-1 lg:mb-4 py-4 rounded px-5 focus:outline-none font-2xl'>
  </input>
  <button className="bg-[#0d2e4e] text-xl px-10 py-2.5 mt-5 font-[poppins] rounded-lg hover:bg-white hover:text-black  w-full  ">Request</button>

</div>

  </div>
<ItemsContainer/>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 '><span> @2023 Apply-All rights reserved</span><span>Term  privacy policy</span>
<SocialIcon/>
</div>
</footer>
  )
}

export default Footer
