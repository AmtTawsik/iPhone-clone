import React from "react";
import p1 from "../../Media/photo/bundle__dlqe12erfzsm_large.jpg";
import one from "../../Media/photo/apple_one__cq8ojsqxitea_large.jpg";

const Featured1 = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold py-16 text-center">
      Get more out of your iPhone.
      </h2>
      <div data-aos="flip-left" data-aos-duration="1000" className="md:flex items-center w-11/12 mx-auto bg-white py-20 px-10">
        <div className="mb-5 md:mb-0 flex justify-center">
          <img src={p1} alt="" />
        </div>
        <div className="md:p-16">
          <div className="flex justify-center"><img src={one} alt="" /></div>
          <h4 className="text-4xl font-bold text-center mt-2">Bundle up to six Apple services.</h4> 
          <h4 className="text-4xl font-bold text-center mb-2">And enjoy more for less.</h4> 
          <div className="flex justify-center">
          <button className="text-2xl text-primary-600 flex items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Featured1;
