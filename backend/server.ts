import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/product-routes";

dotenv.config({ path: ".env" });

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(productRoutes);

async function connectToDb() {
  try {
    if (typeof process.env.ATLAS_URI === "undefined") {
      throw new Error("Environment variable ATLAS_URI is undefined");
    }

    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`DB connection error: ${err}`);
  }
}
connectToDb();

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${process.env.PORT}`);
});
