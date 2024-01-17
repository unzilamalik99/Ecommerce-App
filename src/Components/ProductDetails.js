import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import { ShopContext } from "../Contexts/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { Products } = useContext(ShopContext);
  const { addToCart } = useContext(CartContext);

  const product = Products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        ...Loading
      </section>
    );
  }
  const { title, price, description, image } = product;

  return (
    <>
      <div className=" pt-[80px] py-5 md:pt-[170px]  md:text-3xl md:py-10 text-xl font-bold bg-slate-200 justify-center text-center ">
        <h1>Shop Now</h1>
      </div>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row item-center md:pt-10 pt-40">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-80">
              <img className=" w-[300px] lg:max-w-sm " src={image} alt="" />
            </div>
            <div className="flex-1 text-center lg:text-left  ">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                $ {price}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-black py-4 px-8 text-white rounded-xl "
              >
                addToCart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
