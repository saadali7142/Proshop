<<<<<<< HEAD
import express from 'express';
// const express = require("express");
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// import products from './data/products.js';
// const products = require("./data/products.js").default;
// const dotenv = require("dotenv");
import productRoutes from './routes/productRoutes.js';
dotenv.config();

connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

// app.get('/api/products', (req, res) => {
//   //   res.send("API is running");

//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   console.log(req.params);
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
=======
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

connectDB();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
>>>>>>> master
);
