import React from "react";
import img from "../../Media/iphone_14_pro_hero__e4ivycyx40k2_large.jpg";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="text-white text-center w-11/12 mx-auto">
        <p className="text-xl text-gray-100 pt-8">New</p>
        <p className="text-2xl font-bold my-5">iPhone 14 Pro</p>
        <h3 className="text-4xl font-bold text-pink-500">Pro. Beyond.</h3>
        <p className="text-xl my-5">
          From $41.62/mo. for 24 mo. or $999 before trade‑in<sup>1</sup>
        </p>
        <div className="flex justify-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-1.5 rounded-3xl mr-5">
            Buy
          </button>
          <button className="text-2xl text-primary-600 flex items-center">
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000" className="flex justify-center my-5">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
