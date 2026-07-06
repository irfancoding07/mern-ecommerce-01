// import Order from "../models/order.js";
// import Product from "../models/Product.js";



// // Place Order COD: /api/order/cod
// export const placeOrderCOD = async (req , res)=>{
//     try {
//         const {userId, items, address} = req.body;
//         if(!address || items.length === 0){
//             return res.json({success: false, message: "Invalid data"})
//         }
//         //Calculate Amount Using Items
//         let amount = await items.reduce(async(ActiveXObject, item)=>{
//             const product = await Product.findById(item.product);
//             retunr (await acc) + product.offerPrice * item.quantity;
//         }, 0)

//         //Add Tax Charge(2%)
//         amount += Math.floor(amount * 0.02);

//         await Order.create({
//             userId,
//             items,
//             amount,
//             address,
//             paymentType:"COD",
//         });
//    return res.json({success:true, message: "Order Placed Successfully"})
//     } catch (error) {
//           console.log(error.message)
//     res.json({success: false, message: error.message })
//     }
// }

// // Get Orders by user ID: /api/order/user
// export const getUserOrders = async(req, res)=>{
//     try {
//         const {userId}= req.body
//         const orders = await Order.find({
//             userId,
//             $or: [{paymentType: "COD"}, {isPaid: true}]
//         }).populate("items.product address").sort({createdAt: -1})
//         res.json({success:true, orders});
//     } catch (error) {
//         console.log(error.message)
//     res.json({success: false, message: error.message })
//     }
// }

// //Get All Orders (for seller / admin) : /api/order/seller
// export const getAllOrders = async(req, res)=>{
//     try {
//         const orders = await Order.find({
//             $or: [{paymentType: "COD"}, {isPaid: true}]
//         }).populate("items.product address").sort({createdAt: -1})
//         res.json({success:true, orders});
//     } catch (error) {
//         console.log(error.message)
//     res.json({success: false, message: error.message })
//     }
// }




import Order from "../models/order.js";
import Product from "../models/Product.js";
import Razorpay from "razorpay";
import crypto from "crypto";


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ===============================
// Place Order (Cash on Delivery)
// Route: POST /api/order/cod
// ===============================
export const placeOrderCOD = async (req, res) => {
  try {
   const { items, address } = req.body;
const userId = req.userId;
  if (!address || !items || items.length === 0){
      return res.json({
        success: false,
        message: "Invalid order data",
      });
    }

    let amount = 0;

    // Calculate total amount
    for (const item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.json({
          success: false,
          message: "Product not found",
        });
      }

      amount += product.offerPrice * item.quantity;
    }

    // Add 2% tax
    amount += Math.floor(amount * 0.02);

    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
      isPaid: false,
    });

    res.json({
      success: true,
      message: "Order Placed Successfully",
      order,
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};




// ===================================
// Place Order Using Razorpay
// POST /api/order/razorpay
// ===================================
export const placeOrderRazorpay = async (req, res) => {
  try {
      console.log(req.body);
    const { userId, items, address } = req.body;

    if (!userId || !address || items.length === 0) {
      return res.json({
        success: false,
        message: "Invalid Data",
      });
    }

    let amount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.json({
          success: false,
          message: "Product not found",
        });
      }

      amount += product.offerPrice * item.quantity;
    }

    // 2% Tax
    amount += Math.floor(amount * 0.02);

    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
      isPaid: false,
    });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: order._id.toString(),
    };

    const razorpayOrder = await razorpay.orders.create(options);

    res.json({
      success: true,
      order,
      razorpayOrder,
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};









// ===================================
// Verify Razorpay Payment
// POST /api/order/verify
// ===================================
export const verifyRazorpayPayment = async (req, res) => {
  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {

      await Order.findByIdAndUpdate(orderId, {
        isPaid: true,
      });

      return res.json({
        success: true,
        message: "Payment Successful",
      });

    } else {

      return res.json({
        success: false,
        message: "Payment Verification Failed",
      });

    }

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });

  }
};







// ===============================
// Get User Orders
// Route: GET /api/order/user
// ===============================
export const getUserOrders = async (req, res) => {
  try {
    // const { userId } = req.body;
    const userId = req.userId;

    const orders = await Order.find({
      userId,
      $or: [
        { paymentType: "COD" },
        { isPaid: true },
      ],
    })
      .populate("items.product")
      .populate("address")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get All Orders (Seller/Admin)
// Route: GET /api/order/seller
// ===============================
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [
        { paymentType: "COD" },
        { isPaid: true },
      ],
    })
      .populate("items.product")
      .populate("address")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};