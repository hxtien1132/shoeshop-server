import express from "express";
import dotenv from "dotenv";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import connectDatabase from "./config/MongoDb.js";
import cors from "cors";
import categoryRoute from "./Routes/categoryRoutes.js";
dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());
// app.use(helmet());
// APIs
app.use("/api/import", ImportData);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
