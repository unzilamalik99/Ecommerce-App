import React, { useState, useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";

export default function Header() {
  const { IsOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  //event listener
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "Shop ", link: "/Product" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <>
      <header className={"fixed w-full z-10 transition-all"}>
        <div>
          <nav className="md:w-full left-0 top-0 z-[999] overflow-hidden ">
            <div>
              <div>
                <div className="bg-[#010302]   md:w-full text-white md:block hidden px-5 py-4 font-medium justify-center  ">
                  <span className="font-bold  text-3xl px-10 flex flex-row justify-between">
                    <span className="flex flex-row gap-4 items-center">
                      <Link to={"/"}>
                        <div>
                          <img
                            alt="img"
                            className="rounded-full w-[50px] bg-white"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6KZMFGZgpVWAbd7Req3iCzV-35j3t3vdnA&usqp=CAU"
                          />
                        </div>
                      </Link>{" "}
                      Shopping.
                    </span>

                    <div>
                      <div className="flex flex-row gap-5 text-3xl pl-20 items-center  ">
                        <IoMdContact />
                        <div
                          onClick={() => setIsOpen(!IsOpen)}
                          className="text-white cursor-pointer flex relative max-w-[50px]"
                        >
                          <BsBag />
                          {/* <div className="bg-white text-black absolute -right-2 top-[-5px] text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center ">
                            {itemAmount}
                          </div> */}
                        </div>

                        <span className="text-white cursor-pointer flex relative max-w-[50px]">
                          {" "}
                          <AiOutlineShoppingCart />{" "}
                          <div className="bg-white text-black absolute -right-2 top-[-8px]  text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center ">
                            {itemAmount}
                          </div>
                        </span>
                        <span className="text-white cursor-pointer flex relative max-w-[50px]">
                          {" "}
                          <AiOutlineHeart />
                          {/* <div className="bg-white text-black absolute -right-2 top-[-8px]  text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center ">
                            {itemAmount}
                          </div> */}
                        </span>
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
                    <Link to={"/"}>
                      <div>
                        <img
                          alt="img"
                          className="rounded-full w-[30px] bg-white"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6KZMFGZgpVWAbd7Req3iCzV-35j3t3vdnA&usqp=CAU"
                        />
                      </div>
                    </Link>

                    <div className="flex flex-row gap-5 text-2xl pl-20 items-center  ">
                      <IoMdContact />
                      <div
                        onClick={() => setIsOpen(!IsOpen)}
                        className="text-white cursor-pointer flex relative max-w-[50px]"
                      >
                        <BsBag />
                        {/* <div className="bg-white text-black absolute -right-2 top-[-5px] text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center ">
                          {itemAmount}
                        </div> */}
                      </div>

                      <span className="text-white cursor-pointer flex relative max-w-[50px]">
                        {" "}
                        <AiOutlineShoppingCart />{" "}
                        <div className="bg-white text-black absolute -right-2 top-[-8px]  text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center ">
                          {itemAmount}
                        </div>
                      </span>
                      <span className="text-white cursor-pointer flex relative max-w-[50px]">
                        {" "}
                        <AiOutlineHeart />
                        {/* <div className="bg-white text-black absolute -right-2 top-[-8px]  text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center ">
                          {itemAmount}
                        </div> */}
                      </span>
                    </div>

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
                  <li key={i} className="p-10 border py-6 w-400 ">
                    <Link to={menu?.link}>{menu?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
