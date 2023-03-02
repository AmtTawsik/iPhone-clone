import React from "react";
import p1 from "../../Media/photo/trade_in__elbczdpbk06e_large.jpg";
import p2 from "../../Media/photo/apple_card__bkmaxfjg05ua_large.jpg";

const Trade = () => {
  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-12 mt-16 mb-10 gap-5 md:gap-10 max-w-screen-xl">
      <div class="p-5 bg-white border border-gray-200 rounded-lg shadow-md col-span-12 md:col-span-6  w-[360px] md:w-full">
        <div class="py-5 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl">
            Trade in your smartphone for credit.
          </h2>
          <p className="text-xl mt-8">
            With Apple Trade In, you can get credit toward a new iPhone when you
            trade in an eligible smartphone.6 It’s good for you and the planet.
          </p>
          <div className="flex justify-center my-10">
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
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-center" href="#">
          <img className="" src={p1} alt="" />
        </div>
      </div>

      <div class="p-5 bg-white border border-gray-200 rounded-lg shadow-md col-span-12 md:col-span-6 w-[360px] md:w-full">
        <div class="py-5 text-center md:px-10">
          <h2 className="text-3xl md:text-5xl">
            Get 3% Daily Cash back with Apple Card.
          </h2>
          <p className="text-xl mt-8">
            And pay for your new iPhone over 24 months, interest‑free when you
            choose to check out with Apple Card Monthly Installments.*
          </p>
          <div className="flex justify-center my-10">
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
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-center" href="#">
          <img className="" src={p2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trade;
