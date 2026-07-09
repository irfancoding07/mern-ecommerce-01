 

// import Address from "../models/Address.js";

// // Add Address
// export const addAddress = async (req, res) => {
//   try {
//     const { address, userId } = req.body;

//     await Address.create({
//       ...address,
//       userId,
//     });

//     res.json({
//       success: true,
//       message: "Address Added Successfully",
//     });

//   } catch (error) {
//     console.log(error);

//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get Address
// export const getAddress = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const addresses = await Address.find({
//       userId,
//     });

//     res.json({
//       success: true,
//       addresses,
//     });

//   } catch (error) {
//     console.log(error);

//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };











import Address from "../models/Address.js";

// Add Address
export const addAddress = async (req, res) => {
  try {

  console.log("Inside addAddress");
    console.log("User ID:", req.userId);
    console.log("Address:", req.body.address);


    const userId = req.userId;
    const { address } = req.body;

    await Address.create({
      ...address,
      userId,
    });

    res.json({
      success: true,
      message: "Address Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get Address
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId;

    const addresses = await Address.find({ userId });

    res.json({
      success: true,
      addresses,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};