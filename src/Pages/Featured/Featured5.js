import React from "react";
import img1 from "../../Media/photo/switching_to_iphone__e3oz9r418awm_large.jpg";
import img2 from "../../Media/photo/privacy_update__cc6s1lqakkk2_large.jpg";

const Featured3 = () => {
  return (
    <div className="md:flex w-11/12 mx-auto ">
      <div data-aos="fade-up-right" data-aos-duration="1500" className="w-11/12 mx-auto bg-white mt-5 pt-10 md:mr-2">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 px-10">
          Switching to iPhone is super simple.
        </h2>

        <div className="flex justify-center mb-5 md:mb-0">
          <button className="text-2xl text-primary-600 flex items-center mb-2">
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
        <div className="flex justify-center">
          <img src={img1} alt="" />
        </div>
      </div>

      <div data-aos="fade-up-right" data-aos-duration="1500" className="w-11/12 mx-auto bg-white mt-5 pt-10 md:ml-2">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Privacy. That’s iPhone.
        </h2>

        <div className="flex justify-center">
          <button className="text-2xl text-primary-600 flex items-center mb-2">
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
        <div className="flex justify-center">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured3;
