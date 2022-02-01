import express from 'express';
// const express = require("express");
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
// const products = require("./data/products.js").default;
// const dotenv = require("dotenv");

dotenv.config();

connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  //   res.send("API is running");

  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  console.log(req.params);
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
