import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  category: String,
  imageUrl: String,
  exclusive: Boolean,
});