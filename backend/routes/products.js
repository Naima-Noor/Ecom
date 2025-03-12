const express = require("express");
const multer = require("multer");
const path = require("path");
const { getAllProducts, addProduct } = require("../controllers/productController");

const router = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },

});
const upload = multer({ storage });

// Routes
router.get("/", getAllProducts);
router.post("/", upload.single("image"), addProduct);

module.exports = router;
