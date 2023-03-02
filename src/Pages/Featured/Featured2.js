import React from 'react';
import p1 from '../../Media/photo/airtag__b5lt0bcbd9ua_large.jpg'

const Featured2 = () => {
    return (
        <div data-aos="flip-right" data-aos-duration="1000" className="md:flex items-center w-11/12 mx-auto bg-white mt-5">
        <div className="mb-5 md:mb-0">
          <img src={p1} alt="" />
        </div>
        <div className="md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
          AirTag
          </h2>
          <p className="text-center text-xl my-3">Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.</p>
          <div className="flex justify-center">
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
        </div>
      </div>
    );
};

export default Featured2;