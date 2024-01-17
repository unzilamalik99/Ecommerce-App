import React from 'react'
import Item from './Item'  
const  ItemsContainer=()=> {
  return (
    <>
 <div className='grid grid-cols sm:grid-col-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
 <Item/>
 
 </div>
    
    </>
   
  )
}

export default ItemsContainer