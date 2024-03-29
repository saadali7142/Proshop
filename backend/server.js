import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from './routes/orderRoutes.js'
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
app.use('/api/orders',orderRoutes)

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
