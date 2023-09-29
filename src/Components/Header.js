import React, { useState ,useContext} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {AiOutlineHeart} from 'react-icons/ai'
import { AiOutlineClose } from "react-icons/ai";
import {PiNumberZeroBold} from 'react-icons/pi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";
import {BsBag} from 'react-icons/bs'
import { SidebarContext } from "../Contexts/SidebarContext";

export default function Header() {
  const{ IsOpen,setIsOpen} =useContext(SidebarContext)
  const [open, setOpen] = useState(false);
  // const handleClick = (event) => {
  //   event.preventDefault(); // This will prevent the default link behavior
  //   // Perform any custom actions or navigation here
  //   console.log('Custom click handler executed');
  // };

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "Features ", link: "/Features" },
    { name: "Shop ", link: "/Shop" },
    { name: "Pages", link: "/Pages" },
     { name: "Blog", link: "/Blog" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <>
      <div>
        <nav className="md:w-full left-0 top-0 z-[999] overflow-hidden ">
         <div>
         <div>
         <div className="bg-[#010302]   md:w-full text-white md:block hidden px-5 py-4 font-medium justify-center  ">
              <span className="font-bold  text-3xl px-10 flex flex-row justify-between">
           <span className="flex flex-row gap-4 items-center">  
           <img alt="img"  className="rounded-full w-[50px] bg-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6KZMFGZgpVWAbd7Req3iCzV-35j3t3vdnA&usqp=CAU"/>
                {" "}
             Shopping.</span>
             <div className="flex flex-row items-center border border-sky-400 outline-none"><input placeholder="Search Product here!" className="py-2 px-7 text-black text-xl" /><button><AiOutlineSearch className="w-20 h-[45px] text-xl bg-sky-400 "/></button></div>
             <div>
             <div className="flex flex-row gap-5 text-3xl pl-20 items-center  ">
             <div onClick={()=> setIsOpen(!IsOpen)} className="text-white cursor-pointer flex relative"><BsBag/></div>
              <IoMdContact/>
             <span > <AiOutlineShoppingCart className="relative"/><PiNumberZeroBold className=" absolute p-1 text-[20px]  bg-white text-black  rounded-xl top-1 right-[100px] cursor-pointer "/></span>
             <span > <AiOutlineHeart className="relative"/><PiNumberZeroBold className=" absolute  p-1 text-[20px] rounded-xl top-1 right-[53px] bg-white text-black cursor-pointer "/></span>
      
             </div>
            </div>
              </span>
            </div>
            <div className="bg-gradient-to-r from-slate-300 to-slate-300    md:w-full text-black md:block hidden px-5 py-4 font-medium justify-center  ">
              <span className="font-bold  text-3xl px-10 flex flex-row justify-between">
          
                <ul className="flex float-right gap-[70px] text-3xl  px-20 justify-between">
                  {menuLinks?.map((menu, i) => (
                    <li
                      onClick={() => setOpen(false)}
                      key={i}
                      className="relative text-[23px] w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
                    >
                      <Link to={menu?.link} onClick={() => setOpen(!open)}>
                        {menu?.name}
                      </Link>
                    </li>
                  ))}
              
                </ul>
              </span>
            </div>
            <div className="bg-black md:hidden  py-5 px-5 text-xl justify-between text-white">
              
              <div className="flex flex-row  justify-between">
              <span>Menu</span>
             <div className="text-2xl gap-5 flex flex-row pl-40 relative"> 
             <div onClick={()=> setIsOpen(!IsOpen)} className="text-white text-xl"><BsBag/></div>
              <IoMdContact/>
             <span > <AiOutlineShoppingCart className="relative"/><PiNumberZeroBold className=" absolute p-1 text-[20px] bg-white text-black  rounded-xl top-[-9px]   right-[34px] cursor-pointer "/></span>
             <span > <AiOutlineHeart className="relative"/><PiNumberZeroBold className="absolute p-1 text-[20px] bg-white text-black  rounded-xl top-[-9px]   right-[-9px] cursor-pointer  "/></span></div>
      
              
                {open ? (
                  <div
                    onClick={() => setOpen(!open)}
                    className={`md:hidden float-right text-white text-3xl ${
                      open ? "text-gray-900" : "text-gray-900"
                    }`}
                  >
                    <AiOutlineClose />
                  </div>
                ) : (
                  <div
                    onClick={() => setOpen(!open)}
                    className={`md:hidden float-right text-white text-3xl ${
                      open ? "text-gray-900" : "text-gray-200"
                    }`}
                  >
                    <AiOutlineMenu name="menu" />
                  </div>
                )}
              </div>
            </div>
           
          </div>
         </div>
         <div
            className={`px-0  top-[70px] container md:hidden absolute z-20 flex justify-between items-center duration-300 ${
              open ? "block" : "hidden"
            } md:block`}
          >
            <ul className=" py-20 top-40 left-0  h-screen w-full pb-20 flex flex-col justify-center item-center text-primary font-medium text-xl text-black bg-gradient-to-r from-slate-300 to-slate-200  max-w-xs ">
              {menuLinks?.map((menu, i) => (
                <li
                  key={i}
                  className="p-10 border  py-6 w-400 "
                >
                  <Link to={menu?.link}>{menu?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}




