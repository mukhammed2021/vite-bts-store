import { Request, Response } from "express";
import { Product } from "../models/product";

const handleError = (res: Response, error: unknown) => {
  res.status(500).json({ error });
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    handleError(res, err);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    handleError(res, err);
  }
};


