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

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;  // Get the product ID from the URL
        const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(result.rows[0]); // Send product details back
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ error: "Database error" });
    }
};



module.exports = { getAllProducts, addProduct , getProductById};
