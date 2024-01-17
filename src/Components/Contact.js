import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="py-10 px-3 pt-20 md:pt-60 bg-slate-900">
      <div className="text-center mt-8">
        <h3 className=" text-5xl text-white font-bold">Contact Us</h3>

        <div className="mt-10 flex md:flex-row flex-col gap-6 max-w-4xl bg-slate-200 p-6 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="your name" />
            <input type="Email" placeholder="your Email Adress" />
            <textarea placeholder="your Message" rows={10}></textarea>
            <button className="bg-[#2a2b2c] text-white px-5 py-4 mt-5 font-semibold rounded-full hover:bg-white hover:text-black w-fit ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
