import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    category: String,
    imageUrl: String,
    exclusive: Boolean,
  },
  { versionKey: false }
);

export const Product = mongoose.model("Product", productSchema);
