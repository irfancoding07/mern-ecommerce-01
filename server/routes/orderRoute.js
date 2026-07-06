import express from "express";
import authUser from "../middlewares/authUser.js";
import authSeller from "../middlewares/authSeller.js";

import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  placeOrderRazorpay,
  verifyRazorpayPayment,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

// COD Order
orderRouter.post("/cod", authUser, placeOrderCOD);

// Razorpay Order
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// Verify Razorpay Payment
orderRouter.post("/verify", authUser, verifyRazorpayPayment);

 
// User Orders
orderRouter.get("/user", authUser, getUserOrders);

// Seller Orders
orderRouter.get("/seller", authSeller, getAllOrders);

export default orderRouter;