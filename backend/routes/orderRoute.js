import adminAuth from "../middleware/adminAuth.js";
import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placerOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment feacture

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placerOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//user featture

orderRouter.post("/useorders", authUser, userOrders);


// verify payment".")
orderRouter.post('/verifystripe',authUser,verifyStripe)  
export default orderRouter;
