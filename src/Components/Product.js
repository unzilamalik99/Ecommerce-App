import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";

import Shop from "./Shop";

const Product = () => {
  const { Products } = useContext(ShopContext);

  return (
    <>
      <div>
        <section className="md:py-[150px] py-[50px]">
          <div className="md:text-3xl  text-xl font-bold py-10 bg-slate-200 text-center justify-center">
            <h1>Shop Now</h1>
          </div>

          <div className="container py-5 mx-auto max-w-7xl">
            <div className="ProductMAP grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {Products && Products.length > 0 ?  (
              Products.map((product) => {
                return <Shop product={product} key={product.id} />;
              })): (
                <p>No products available.</p>
              )}
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
