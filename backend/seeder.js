<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';
=======
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
>>>>>>> master

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

<<<<<<< HEAD
    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.log(`${error}`);
=======
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
>>>>>>> master
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

<<<<<<< HEAD
    console.log('Data Detroyed');
    process.exit();
  } catch (error) {
    console.log(`${error}`);
=======
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
>>>>>>> master
    process.exit(1);
  }
};

<<<<<<< HEAD
if (process.argv[2] === '-d') {
=======
if (process.argv[2] === "-d") {
>>>>>>> master
  destroyData();
} else {
  importData();
}
