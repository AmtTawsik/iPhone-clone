import React from "react";
import p1 from '../../Media/cny23_familypage_banner_iphone_bunnylogo__dagr97y2stg2_large.png'

const WeDo = () => {
  return (
    <div>
      <div className="bg-wedo-bg bg-cover w-11/12 mx-auto pt-16 pb-20 my-5">
      <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-center pt-16 pb-10">
        <img src={p1} alt="" />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="text-center text-white font-bold">
        <h2 className="md:text-5xl text-3xl">A gift for every wish.</h2>
        <p className="text-2xl my-5">Find something for everyone</p>
        <p className="text-2xl">this Lunar New Year.</p>
        <div className="flex justify-center py-5">
        <button className="text-2xl flex items-center">
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
      </div>
    </div>
    <h2 className="md:text-5xl text-3xl font-bold text-center py-20"><span data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Ways to Buy iPhone</span></h2>
    </div>
  );
};

export default WeDo;
