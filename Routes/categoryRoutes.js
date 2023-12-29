import express from "express";
import asyncHandler from "express-async-handler";
import Category from "../Models/CategoryModel.js";

const categoryRoute = express.Router();
categoryRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const categories = await Category.find({}).sort({ _id: -1 });
    res.json(categories);
  })
);
export default categoryRoute;
