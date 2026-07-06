// // import React, { useState } from 'react'
// // import { assets, categories } from '../../assets/assets';
// // import { useAppContext } from '../../context/AppContext';
// // import toast from 'react-hot-toast';

// // const AddProduct = () => {

// //     const [files, setFiles] = useState([]);
// //     const [name, setName] = useState('');
// //     const [description, setDescription] = useState('');
// //     const [category, setCategory] = useState('');
// //     const [price, setPrice] = useState('');
// //     const [offerPrice, setOfferPrice] = useState('');

// // const {axios} = useAppContext();
     
// //     const onSubmitHandler = async (event) => {
// //       try {
// //            event.preventDefault();

// //            const productData = {
// //             name,
// //             description: description.split('\n'),
// //             category,
// //             price,
// //             offerPrice
// //            }

// //            const formData = new FormData();
// //            formData.append('productData', JSON.stringify(productData));
// //            for(let i = 0; i< files.length; i++){
// //             formData.append('images', files[i])
// //            }
          
// //            const {data} = await axios.post('/api/product/add', formData);

// //            if (data.success){
// //             toast.success(data.message)
// //             setName('');
// //             setDescription('')
// //             setCategory('')
// //             setPrice('')
// //             setOfferPrice('')
// //             setFiles('')
// //            }else{
// //             toast.error(data.message)
// //            }

// //       } catch (error) {
// //         toast.error(error.message)
// //       }
// //     }

// //     return (
// //         <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
// //             <form onSubmit={onSubmitHandler} className="md:p-10 p-4 space-y-5 max-w-lg">
// //                 <div>
// //                     <p className="text-base font-medium">Product Image</p>
// //                     <div className="flex flex-wrap items-center gap-3 mt-2">
// //                         {Array(4).fill('').map((_, index) => (
// //                             <label key={index} htmlFor={`image${index}`}>
// //                                 <input
// //                                     onChange={(e) => {
// //                                         const updatedFiles = [...files];
// //                                         updatedFiles[index] = e.target.files[0]
// //                                         setFiles(updatedFiles)
// //                                     }}
// //                                     accept="image/*" type="file" id={`image${index}`} hidden />

// //                                 <img className="max-w-24 cursor-pointer" src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area} alt="uploadArea" width={100} height={100} />
// //                             </label>
// //                         ))}
// //                     </div>
// //                 </div>
// //                 <div className="flex flex-col gap-1 max-w-md">
// //                     <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
// //                     <input
// //                         onChange={(e) => setName(e.target.value)} value={name}
// //                         id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
// //                 </div>
// //                 <div className="flex flex-col gap-1 max-w-md">
// //                     <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
// //                     <textarea
// //                         onChange={(e) => setDescription(e.target.value)} value={description}
// //                         id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
// //                 </div>
// //                 <div className="w-full flex flex-col gap-1">
// //                     <label className="text-base font-medium" htmlFor="category">Category</label>
// //                     <select
// //                         onChange={(e) => setCategory(e.target.value)} value={category}
// //                         id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
// //                         <option value="">Select Category</option>
// //                         {/* {categories.map(()=>(
// //                             <option key={index} value={item.path}>{item.path}</option>
// //                         ))} */}
// //                         {categories.map((item, index) => (
// //                             <option key={index} value={item.path}>
// //                                 {item.path}
// //                             </option>
// //                         ))}
// //                     </select>
// //                 </div>
// //                 <div className="flex items-center gap-5 flex-wrap">
// //                     <div className="flex-1 flex flex-col gap-1 w-32">
// //                         <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
// //                         <input
// //                             onChange={(e) => setPrice(e.target.value)} value={price}
// //                             id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
// //                     </div>
// //                     <div className="flex-1 flex flex-col gap-1 w-32">
// //                         <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
// //                         <input
// //                             onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice}
// //                             id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
// //                     </div>
// //                 </div>
// //                 <button className="px-8 py-2.5 bg-primary cursor-pointer text-white font-medium rounded">ADD</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default AddProduct
















// import React, { useState } from "react";
// import { assets, categories } from "../../assets/assets";
// import { useAppContext } from "../../context/AppContext";
// import toast from "react-hot-toast";

// const AddProduct = () => {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const { axios } = useAppContext();

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       const productData = {
//         name,
//         description: description.split("\n"),
//         category,
//         price: Number(price),
//         offerPrice: Number(offerPrice),
//       };

//       const formData = new FormData();

//       formData.append("productData", JSON.stringify(productData));

//       files.forEach((file) => {
//         if (file) {
//           formData.append("images", file);
//         }
//       });

//       const { data } = await axios.post(
//         "/api/product/add",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);

//         setName("");
//         setDescription("");
//         setCategory("");
//         setPrice("");
//         setOfferPrice("");
//         setFiles([]);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
//       <form
//         onSubmit={onSubmitHandler}
//         className="md:p-10 p-4 space-y-5 max-w-lg"
//       >
//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium">Product Images</p>

//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label key={index} htmlFor={`image${index}`}>
//                   <input
//                     hidden
//                     id={`image${index}`}
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                   />

//                   <img
//                     className="w-24 h-24 object-cover cursor-pointer border rounded"
//                     src={
//                       files[index]
//                         ? URL.createObjectURL(files[index])
//                         : assets.upload_area
//                     }
//                     alt="upload"
//                   />
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-1">
//           <label
//             htmlFor="product-name"
//             className="text-base font-medium"
//           >
//             Product Name
//           </label>

//           <input
//             id="product-name"
//             type="text"
//             required
//             placeholder="Type here"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400"
//           />
//         </div>

//         {/* Description */}
//         <div className="flex flex-col gap-1">
//           <label
//             htmlFor="product-description"
//             className="text-base font-medium"
//           >
//             Product Description
//           </label>

//           <textarea
//             id="product-description"
//             rows={4}
//             required
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Type here"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400 resize-none"
//           />
//         </div>

//         {/* Category */}
//         <div className="flex flex-col gap-1">
//           <label htmlFor="category" className="text-base font-medium">
//             Category
//           </label>

//           <select
//             id="category"
//             required
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400"
//           >
//             <option value="">Select Category</option>

//             {categories.map((item, index) => (
//               <option key={index} value={item.path}>
//                 {item.path}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Prices */}
//         <div className="flex flex-wrap gap-5">
//           <div className="flex-1 flex flex-col gap-1">
//             <label
//               htmlFor="product-price"
//               className="text-base font-medium"
//             >
//               Product Price
//             </label>

//             <input
//               id="product-price"
//               type="number"
//               required
//               placeholder="0"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400"
//             />
//           </div>

//           <div className="flex-1 flex flex-col gap-1">
//             <label
//               htmlFor="offer-price"
//               className="text-base font-medium"
//             >
//               Offer Price
//             </label>

//             <input
//               id="offer-price"
//               type="number"
//               required
//               placeholder="0"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400"
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="px-8 py-2.5 bg-primary text-white rounded cursor-pointer"
//         >
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;










import React, { useState } from "react";
import { assets, categories } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { axios, fetchProducts } = useAppContext();

  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (files.filter(Boolean).length === 0) {
        return toast.error("Please select at least one image.");
      }

      const productData = {
        name,
        description: description.split("\n"),
        category,
        price: Number(price),
        offerPrice: Number(offerPrice),
      };

      const formData = new FormData();

      formData.append("productData", JSON.stringify(productData));

      files.forEach((file) => {
        if (file) {
          formData.append("images", file);
        }
      });

      const { data } = await axios.post(
        "/api/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);

        await fetchProducts();

        setName("");
        setDescription("");
        setCategory("");
        setPrice("");
        setOfferPrice("");
        setFiles([]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <form
        onSubmit={onSubmitHandler}
        className="md:p-10 p-4 space-y-5 max-w-lg"
      >
        {/* Product Images */}
        <div>
          <p className="text-base font-medium">Product Images</p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    hidden
                    id={`image${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                  />

                  <img
                    className="w-24 h-24 border rounded object-cover cursor-pointer"
                    src={
                      files[index]
                        ? URL.createObjectURL(files[index])
                        : assets.upload_area
                    }
                    alt=""
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Product Name</label>

          <input
            type="text"
            required
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2.5 outline-none"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">
            Product Description
          </label>

          <textarea
            rows={4}
            required
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-3 py-2.5 resize-none outline-none"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Category</label>

          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2.5 outline-none"
          >
            <option value="">Select Category</option>

            {categories.map((item, index) => (
              <option key={index} value={item.path}>
                {item.path}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="flex gap-5">
          <div className="flex-1 flex flex-col gap-1">
            <label className="font-medium">
              Product Price
            </label>

            <input
              type="number"
              required
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded px-3 py-2.5 outline-none"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className="font-medium">
              Offer Price
            </label>

            <input
              type="number"
              required
              placeholder="0"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="border rounded px-3 py-2.5 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-8 py-2.5 rounded cursor-pointer"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
