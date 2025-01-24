import express from "express";
import multer from "multer";
import { addProduct, getProduct, getProducts } from "../controllers/product-controller";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    callback(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", upload.single("imageUrl"), addProduct);

export default router;
