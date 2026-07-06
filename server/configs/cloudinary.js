// import {v2 as cloudinary} from "cloudinary"

// const connectCloudinary = async()=>{
//     cloudinary.config({
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret:process.env.CLOUDINARY_API_SECRET
//     })
// }

// export default connectCloudinary;







import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
  console.log("API Key:", process.env.CLOUDINARY_API_KEY);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME?.trim(),
    api_key: process.env.CLOUDINARY_API_KEY?.trim(),
    api_secret: process.env.CLOUDINARY_API_SECRET?.trim(),
  });

  console.log(cloudinary.config());
};

export default connectCloudinary;