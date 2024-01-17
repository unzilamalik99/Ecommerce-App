import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AiTwotoneDelete} from 'react-icons/ai'
import CardItem from './CardItem'
import { CartContext } from '../Contexts/CartContext'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {SidebarContext} from '../Contexts/SidebarContext'
const Sidebar = () => {
  const {isOpen, handleClose}=useContext(SidebarContext)
const {cart,clearCart,total,itemAmount}= useContext(CartContext)
  return (
  <>

 <div className={`${isOpen?'right-0':'-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[29vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto overflow-x-hidden `}> 
<div className='flex item-center justify-between py-4 border-b'>
  <div className="uppercase text-sm font-semibold">Shopping Bag {itemAmount}</div>
  <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
    <AiOutlineArrowRight className='text-xl'/>
  </div>
</div>
<div className='flex flex-col gap-y-2 h-[520px] lg-[640px] overflow-y-auto overflow-x-hidden border-b'>
 {cart.map((item)=>{
  return <CardItem item={item} key={item.id}/>
 })}
</div>
<div className='flex flex-col gap-y-3 py-4 mt-4'>
 <div className='flex w-full justify-between item-center '>
  {/* Total */}
  <div className='uppercaes font-semibold'><span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}</div>
  {/* Clear Cut icon */}
  <div onClick={clearCart}
  className='cursor-pointer py-5 bg-red-500 text-white w-10 h-10 flex justify-center items-center  rounded-xl text-xl'><AiTwotoneDelete/></div>
 </div>
 <Link to='/' className=" bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">View cart</Link>
 <Link to='/' className=" bg-black flex p-4 justify-center items-center text-white  w-full font-medium">checkout</Link>
</div>
  </div>

  </>
 )

 }
export default Sidebar