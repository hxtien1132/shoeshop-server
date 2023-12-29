import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";
import Category from "./Models/CategoryModel.js";
import category from "./data/Categorys.js";

const ImportData = express.Router();

ImportData.post(
  "/category",
  asyncHandler(async (req, res) => {
    await Category.deleteMany({}, { maxTimeMS: 20000 });
    const importCategory = await Category.insertMany(category);
    res.send({ importCategory });
  })
);

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({}, { maxTimeMS: 20000 });
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

export default ImportData;
