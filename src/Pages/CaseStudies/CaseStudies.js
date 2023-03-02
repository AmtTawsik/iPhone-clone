import React from "react";
import img from "../../Media/iphone_14_hero__ceub5xriecgi_large.jpg";

const CaseStudies = () => {
  return (
    <div  className="bg-white text-black">
      <div data-aos="flip-down" data-aos-duration="2000" className="text-center w-11/12 mx-auto">
        <p className="text-xl text-gray-700 pt-8">New</p>
        <p className="text-2xl font-bold my-5">iPhone 14</p>
        <h3 className="text-5xl font-bold text-pink-600">Big and bigger.</h3>
        <p className="text-xl my-5">
        From $33.29/mo. for 24 mo. or $799 before trade‑in<sup>1</sup>
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
        <div className="flex justify-center my-5">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
