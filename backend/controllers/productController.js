const pool = require("../config/db");

// Get All Products
const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Database error" });
    }
};

// Add Product
const addProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Image file is required!" });
        }

        const { name, description, price } = req.body;
        const image_url = `/uploads/${req.file.filename}`;

        const result = await pool.query(
            "INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, description, price, image_url]
        );

        res.status(201).json({ message: "Product added successfully", product: result.rows[0] });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ error: "Database error" });
    }
};

module.exports = { getAllProducts, addProduct };
