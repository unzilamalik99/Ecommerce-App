import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
const Shop = ({ product }) => {
  // console.log(`Product Data : ${product}`);
  const { addToCart } = useContext(CartContext);
  // if (!product) {
  //   return <div>Loading...</div>;
  // }else{
  //   console.log(`Product Data : ${product}`);
  // }

  const { id, image, category, title, price } = product;
  return (
    <>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition duration-300">
        <div className="w-full h-full justify-center items-center ">
          {/* //image */}
          <div className="w-[200px] mx-auto flex justify-center item-center">
            <img
              className="max-h-[160px] group-hover:scale-110"
              src={image}
              alt=""
            />
          </div>
          <div className="absolute top-6 group-hover:right-5 right-11 py-2 flex flex-col justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <AiOutlinePlus className="text-3xl " />
              </div>
            </button>
            <Link
              to={`/Product/${id} `}
              className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl"
            >
              <AiOutlineEye />
            </Link>
          </div>
          {/* Catageries & title & price*/}
          <div className="px-2">
            <div className="text-sm capitalize text-gray-500"> {category}</div>
            <Link to={`/Product/${id} `}>
              <h2 className="font-semibold mb-1 ">{title}</h2>
            </Link>
            <div className="font-semibold">$ {price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
