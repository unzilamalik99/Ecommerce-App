import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import CartContext from "../Contexts/CartContext";

const CardItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/Product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase dont-medium max-w-[240px text-black hover:underline]"
            >
              {title}
            </Link>
            <div className="text-xl" onClick={handleRemove}>
              <AiOutlineClose className="text-gray-500 cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <AiOutlineMinus />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <AiOutlinePlus />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center text-black font-medium ">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
