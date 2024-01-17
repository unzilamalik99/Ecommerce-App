import React from 'react'
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
 

const SocialIcon=()=> {
  return (
   <>
    <div className='text-[#0d2e4e]'>
    <div className='p-2 cursor-pointer inline-flex item-center rounded-full bg-white mx-1.5 text-xl hover:text-white hover:bg-[#0d2e4e] duration-300'>
       <a href='/'><AiFillFacebook/></a> 
   
     
    </div>
    <div className='p-2 cursor-pointer inline-flex item-center rounded-full bg-white mx-1.5 text-xl hover:text-white hover:bg-[#3cb1c0] duration-300'>
       <a href='/'><AiFillTwitterCircle/></a>
     
    </div>
    <div className='p-2 cursor-pointer inline-flex item-center rounded-full bg-white mx-1.5 text-xl hover:text-white hover:bg-[#11161b] duration-300'>
       <a href='/'><AiFillGithub/></a>
     
    </div>
    <div className='p-2 cursor-pointer inline-flex item-center rounded-full bg-white mx-1.5 text-xl hover:text-white hover:bg-[#5258aa] duration-300'>
       <a href='/'><AiFillLinkedin/></a>
     
    </div>
    <div className='p-2 cursor-pointer inline-flex item-center rounded-full bg-white mx-1.5 text-xl hover:text-white hover:bg-[#df94aa] duration-300'>
       <a href='/'><AiOutlineInstagram/></a>
     
    </div>
    </div>
   </>
  )
}

export default SocialIcon