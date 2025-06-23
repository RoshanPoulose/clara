import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
   
const Contact = () => {
  return (           
                                                                
    <div>             
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>    
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img  
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}     
          alt=""  
        />  
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gold">Our Store</p>
          <p className="text-gray-500">
            <b>Company Name:</b> Clyra
            <br />
            <b>Address:</b> 1234 Elm Street, Suite 567
            <br />
            <b>City:</b> Springfield
            <br />
            <b>State:</b> Illinois
            <br />
            <b>Zip Code:</b> 62704
            <br />
            <b>Country:</b> USA
            <br />                         
            <b>Phone:</b> +1 (555) 123-4567
            <br />     
            <b>Email:</b> support@clyra.com
          </p>
          <p className="font-semibold text-xl text-gold">                               
            Careers at Clara        
          </p>   
                    
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>        
        </div>
      </div>                       
      <NewsLetter />                              
    </div>                       
  );
};

export default Contact;
