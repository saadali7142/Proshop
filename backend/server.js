import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();

dotenv.config();
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

connectDB();

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
