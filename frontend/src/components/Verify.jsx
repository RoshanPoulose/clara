import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"

const Verify = () => {
  const { navigate, backendUrl, setCart, token } = useContext(ShopContext);
  const [searchParms, setSearchParms] = useSearchParams();

  const success = searchParms.get("success");
  const orderId = searchParms.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/verifystripe",
        { success, orderId },
        { headers: { token } }  
      );
      if(response.data.success){
        setCart({})
        navigate("/orders")

      }else{
        navigate("/cart")
      }

    } catch (error) {         
        console.log(error)
        toast.error(error.message)     
    }
  };
  useEffect(() => {
    verifyPayment();
  }, [token]);
  return <div>
      
  </div>;
};
  
export default Verify;
