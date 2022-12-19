<<<<<<< HEAD
import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();

// @desc  fetch all products
// @router GET /api/products
// @access Public Route
router.get(
  '/',
  asyncHandler(async (req, res) => {
    //   res.send("API is running");
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc  fetch single products
// @router GET /api/products/:id
// @access Public Route
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    console.log(req.params);
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);
=======
import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
>>>>>>> master

export default router;
