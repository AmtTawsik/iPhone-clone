import React from "react";
import p1 from "../../Media/photo/apple-research__czkoifogwkeq_large.jpg";

const Featured1 = () => {
  return (
    <div data-aos="flip-left" data-aos-duration="1000" className="md:flex items-center w-11/12 mx-auto bg-white pt-16 justify-between">
      <div className="md:hidden mb-5">
        <img src={p1} alt="" />
      </div>
      <div className="md:p-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Introducing the
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
        Apple Research
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
        app.
        </h2>
        <p className="text-center text-xl my-3">
        The future of health research is you.
        </p>
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
  );
};

export default Featured1;
