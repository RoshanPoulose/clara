import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Clyra is a modern e-commerce platform designed to simplify the way
            you shop for your entire family. From stylish fashion for men and
            women to adorable essentials for kids, Clyra offers a curated
            collection of products that combine quality, comfort, and style —
            all in one place.<br></br> Built with a focus on user-friendly
            design and seamless navigation, Clyra ensures a smooth shopping
            experience across all devices. Whether you're browsing the latest
            trends, gifting a loved one, or shopping for everyday needs, Clyra
            is your trusted destination. We believe in affordable fashion,
            secure payments, fast delivery, and delighting customers with every
            purchase.
          </p>
          <b>🧠 Mission of Clyra</b>
          <p> 
            At Clyra, our mission is to make everyday shopping joyful,
            convenient, and accessible for everyone. We are committed to
            creating a digital space where customers can find quality products
            for every age group, enjoy personalized recommendations, and feel
            confident in every transaction.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={'Why'} text2={'Choose us'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 text-gray-200">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gold"> Professional & Polished:</b>
          <p className=" text-gray-600">Every product on Clyra is handpicked with care and rigorously inspected to uphold our uncompromising standards of quality, durability, and design.</p>
        </div>  
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gold"> Premium & Confident:</b>      
          <p className=" text-gray-600">Designed with you in mind, Clyra offers a smooth, stress-free shopping journey — simple, swift, and satisfying.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gold"> Premium & Confident:</b>
          <p className=" text-gray-600">At Clyra, we’re more than a team — we’re your partners in shopping. Your satisfaction is what drives everything we do.</p>
        </div>
      </div>
      <NewsLetter />  
    </div>
  );
};

export default About;
