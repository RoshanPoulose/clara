import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600" >
            Clyra — Redefining Everyday Fashion. Timeless looks. Effortless
            comfort. Confidence in every stitch.
          </p>
        </div>
        <div >
            <p className="text-xl font-medium mb-5 text-gold">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
          <div >
            <p className="text-xl font-medium mb-5 text-gold">Get in Touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>9100776653</li>
                <li>clyra@gmail.com</li>
                <li>Instgram</li>
                <li>FaceBook</li>
            </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ roshanpoulose.netlify.app - All Right Reserved.</p>
      </div>
    </>
  );
};  

export default Footer;
