import { config } from "dotenv";
import mongoose from "mongoose";
config();
const uri = process.env.MONGO_URL;
const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDatabase;
