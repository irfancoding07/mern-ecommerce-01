// import express from 'express';
// import { upload } from '../configs/multer.js';
// import authSeller from '../middlewares/authSeller.js';
// import { addProduct, changeStock, productById, productList } from '../controllers/productController.js';


// const productRouter = express.Router();

// productRouter.post('/add', upload.array([images]), authSeller,addProduct);
// productRouter.get('/list', productList)
// productRouter.get('/id', productById)
// productRouter.post('/stock', authSeller, changeStock)

// export default productRouter



import express from 'express';
import { upload } from '../configs/multer.js';
import authSeller from '../middlewares/authSeller.js';
import {
    addProduct,
    changeStock,
    productById,
    productList
} from '../controllers/productController.js';

const productRouter = express.Router();

// Add Product
productRouter.post(
    '/add',
    authSeller,
    upload.array('images', 4), // Upload up to 4 images
    addProduct
);

// Get All Products
productRouter.get('/list', productList);

// Get Product By ID
productRouter.get('/id', productById);

// Change Product Stock
productRouter.post('/stock', authSeller, changeStock);

export default productRouter;