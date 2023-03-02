import React from "react";
import img from "../../Media/iphone_se_hero__gd586pazxqqa_large.jpg";

const OurClients = () => {
  return (
    <div className="" id="What">
      <div className="bg-white pt-10">
        <div className="grid grid-cols-12 w-11/12 mx-auto text-black gap-5 items-center">
          <div data-aos="zoom-in-top" data-aos-duration="2000" className="md:col-span-6 col-span-12 text-center">
            <h4 className="text-2xl">
              iPhone<sup className="text-lg">SE</sup>
            </h4>
            <h2 className="text-5xl font-bold text-primary-600">
              Love the power.
            </h2>
            <h2 className="text-5xl font-bold text-primary-600 mt-1 mb-5">
              Love the price.
            </h2>
            <p className="text-xl">
              From $17.87/mo. for 24 mo. or $429 before trade‑in<sup>1</sup>
            </p>
            <div className="flex justify-center my-5">
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
          </div>

          <div data-aos="zoom-in-bottom" data-aos-duration="1000" className="md:col-span-6 col-span-12">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
