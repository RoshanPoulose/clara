import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gold">
      <div className="">
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Unmatched Customer Care</p>
        <p className="text-gray-400">24/7 support, always here for you.</p>
      </div>

      <div className="">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Seamless Exchange Guarantee</p>
        <p className="text-gray-400">Hassle-free, effortless exchanges.</p>
      </div>

      <div className="">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Elite 7-Day Return Promise</p>
        <p className="text-gray-400">Returns made simple and easy.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
