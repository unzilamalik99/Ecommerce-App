import React, { useContext } from "react";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Contexts/ShopContext";
import { FcProcess } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrShieldSecurity } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
const Home = () => {
  const { Products } = useContext(ShopContext);
  // console.log(Products)
  const navigate = useNavigate();

  const someEventHandler = () => {
    navigate("/Product");
  };
  

  return (
    <>
      <Swiper
        slidesperview={1.2}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesperview: 2,
          },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {/* --------slide 1---------- */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center py-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className=" px-10 pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-[#53b19c]  text-2xl md:text-4xl font-semibold">
                <h6 className="font-bold">Now Online</h6>
              </div>
              <div className="px-5  text-4xl md:text-6xl md:w-1/2 font-bold">
                <h1 className="font-italic item-center">
                  Summer Sale Has Started
                </h1>
              </div>
              <div className="pt-2 px-5 text-[#53b19c]   ">
                <h1 className="text-2xl md:text-3xl">UP to 70% OFF</h1>
                <button  onClick={someEventHandler} className="bg-sky-400 md:text-2xl px-4 py-3 mt-5 font-bold text-white rounded-xl hover:bg-black hover:text-white ">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ------------slide2------------- */}

        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center py-20 "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1515204230490-1ad00b70ed3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')",
            }}
          >
            {" "}
            <div className=" px-10 pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-[#53b19c] text-2xl md:text-4xl font-semibold">
                <h6 className="font-bold">Now Online</h6>
              </div>
              <div className="px-5  text-4xl md:text-6xl md:w-1/2 font-bold">
                <h1 className="font-italic item-center">
                  Summer Sale Has Started
                </h1>
              </div>
              <div className="pt-2 px-5 text-[#53b19c]">
                <h1 className="text-2xl md:text-3xl">UP to 70% OFF</h1>
                <button onClick={someEventHandler}  className="bg-sky-400 md:text-2xl px-4 py-3 mt-5 font-semibold text-white  rounded-xl hover:bg-black hover:text-white ">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ---------slide3--------------- */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover  bg-center py-20 "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/top-view-laptop-wireless-headphones-microphone-podcasts-pink-background-technology-audio-equipment-concept_35674-16920.jpg')",
            }}
          >
            <div className=" px-10 pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-[#dde3e4] text-2xl md:text-4xl font-semibold">
                <h6 className="font-bold">Now Online</h6>
              </div>
              <div className="px-5  text-4xl md:text-6xl md:w-1/2 font-bold">
                <h1 className="font-italic item-center">
                  Summer Sale Has Started
                </h1>
              </div>
              <div className="pt-2 px-5 text-[#dde3e4]  ">
                <h1 className="text-2xl md:text-3xl">UP to 70% OFF</h1>
                <button onClick={someEventHandler} className="bg-sky-400 md:text-2xl px-4 py-3 mt-5 font-semibold text-white rounded-xl hover:bg-black hover:text-white ">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ---------slide4--------------- */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover  bg-center py-20 "
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1292443598/photo/flying-shopping-cart-with-shopping-bags-on-a-pink-background.jpg?s=170667a&w=0&k=20&c=d-0iNUYsC3I-cX4iaV4BNPOf9QYWth2fyWO2HvnghWo=')",
            }}
          >
            <div className=" px-10 pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-white text-2xl md:text-4xl font-semibold">
                <h6 className="font-bold">Now Online</h6>
              </div>
              <div className="px-5  text-4xl md:text-6xl md:w-1/2 font-bold">
                <h1 className="font-italic item-center">
                  Summer Sale Has Started
                </h1>
              </div>
              <div className="pt-2 px-5 text-white  ">
                <h1 className="text-2xl md:text-3xl">UP to 70% OFF</h1>
                <button onClick={someEventHandler}  className="bg-sky-400 md:text-2xl px-4 py-3 mt-5 font-semibold text-white rounded-xl hover:bg-black hover:text-white ">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="gap-5 flex-col  px-10 py-5 text-xl flex md:flex-row md:justify-between bg-gray-300 md:px-20 md:text-2xl text-black">
        <div className="flex flex-row  gap-5  ">
          <span>
            <FcProcess />
          </span>
          <span>Quick Delivery </span>
        </div>
        <div className="flex flex-roe  gap-5 ">
          <span>
            <BiSupport />
          </span>
          <span>24/7 customer support</span>
        </div>
        <div className="flex flex-row  gap-5 ">
          <span>
            <GrShieldSecurity />
          </span>
          <span>secure payments</span>
        </div>
        <div className="flex flex-row  gap-5 ">
          <span>
            <LuCalendarDays />
          </span>
          <span>30 days return</span>
        </div>
      </div>
      <div>
        <section className="">
        <div className="text-4xl font-bold py-10 bg-slate-200 text-center justify-center"><h1>Shop Now</h1></div>
          <div className="container py-5 mx-auto max-w-7xl">
            <div className="ProductMAP grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            
            {Products && Products.length > 0 ? (
                Products.map((product) => {
                  return <Shop product={product} key={product.id} />;
                })
              ) : (
                <p>No products available.</p>
              )}

              
            
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
