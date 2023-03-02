import React from "react";
import img1 from "../../Media/tv.jpg";
import img2 from "../../Media/photo/switching_to_iphone__e3oz9r418awm_large.jpg";

const Featured3 = () => {
  return (
    <div className="md:flex w-11/12 mx-auto mb-5">
      <div data-aos="flip-right" data-aos-duration="1000" className="w-11/12 mx-auto bg-tv-bg md:bg-cover text-white mt-5  pt-10 md:mr-1">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 px-10">
          Get 3 months of Apple TV+ free when you buy an iPhone.8
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
      </div>

      <div data-aos="flip-right" data-aos-duration="1000" className="w-11/12 mx-auto bg-white mt-5 pt-10 md:ml-2">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Music
        </h2>
        <p className="text-xl font-bold text-center">Over 100 million songs.</p>
        <p className="text-xl font-bold text-center">
          Start listening for free today.
        </p>
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
        <div className="flex justify-center ">
          <img className="" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured3;
