import React from "react";
import p1 from "../../Media/photo/magsafe__bfji5hb1mqsy_large.jpg";

const Featured1 = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold py-16 text-center">
        Featured accessories
      </h2>
      <div data-aos="flip-left" data-aos-duration="1000" className="md:flex items-center w-11/12 mx-auto bg-white">
        <div className="md:hidden mb-5">
          <img src={p1} alt="" />
        </div>
        <div className="md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            MagSafe
          </h2>
          <p className="text-center text-xl my-3">Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
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
        <div className="hidden md:flex pt-10">
          <img src={p1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured1;
