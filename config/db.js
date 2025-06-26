import mongoose from "mongoose";

export const connectDB = async () => {
  const DB = process.env.DATABASE_URI.replace(
    "<db_password>",
    process.env.DB_PASSWORD
  );

  try {
    await mongoose.connect(DB);
    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log("MongoDB connection failed!", error);
    process.exit(1);
  }
};
