import React from "react";

const DoIt = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bg-white text-center py-16">
        <h6 className="text-2xl">Special carrier deals at Apple</h6>
        <h2 className="md:text-5xl text-3xl font-bold mt-8">
          Save up to $1000 on the newest
        </h2>
        <h2 className="md:text-5xl text-3xl font-bold mb-8 mt-2">
          iPhone after trade‑in.<sup className="text-xl">5</sup>
        </h2>
        <div className="grid grid-cols-12 gap-5  md:w-7/12 md:mx-auto text-xl">
          <p className="md:col-span-3 col-span-12">Get up to $1000 credit after trade-in</p>
          <p className="md:col-span-3 col-span-12">Get $300-$850 credit after trade-in</p>
          <p className="md:col-span-3 col-span-12">Get up to $400 credit after trade-in</p>
          <p className="md:col-span-3 col-span-12">Get up to $800 credit after trade-in</p>
        </div>
        <div className="flex justify-center text-xl my-16">
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-7 py-2.5 rounded-3xl mr-5">
        Find your deal
          </button>
        </div>
        <p className="text-xl">Our Specialists can help you shop — online or in store. Connect with an iPhone Specialist</p>
      </div>
    </div>
  );
};

export default DoIt;
