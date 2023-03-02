import React from "react";
import img from '../../Media/photo/airpods__eb24cvhoe26a_large.jpg'

const Featured3 = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="w-11/12 mx-auto bg-white mt-5 mb-5 md:mb-0">
      <h2 className="text-3xl md:text-5xl font-bold text-center pt-10">
        Magic runs in
      </h2>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
        the family.
      </h2>
      <p className="text-center text-xl">Explore all AirPods models and</p>
      <p className="text-center text-xl mb-2">find the best ones for you.</p>
      <div className="flex justify-center">
        <button className="text-2xl text-primary-600 flex items-center mb-2">
          Shop MagSafe accessories{" "}
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
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Featured3;
