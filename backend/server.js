

//     const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const { Pool } = require("pg");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // PostgreSQL Connection
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "mydb",
//     password: "123456789",
//     port: 5432,
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "uploads")); // Uploads folder path
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;


// // Create Products Table (Run Once)
// const createTable = async () => {
//   try {
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS products (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         description TEXT,
//         price NUMERIC NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `);
//     console.log("Products table is ready.");
//   } catch (error) {
//     console.error("Error creating table:", error);
//   }
// };
// createTable();

// // API Routes

// // Get All Products
// app.get("/api/products", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM products");
//     res.json(result.rows);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// app.post("/api/products", upload.single("image"), async (req, res) => {
//     try {
//       console.log("File Received:", req.file);
//       console.log("Body Received:", req.body);
  
//       if (!req.file) {
//         return res.status(400).json({ error: "Image file is required!" });
//       }
  
//       const { name, description, price } = req.body;
//       const image_url = `/uploads/${req.file.filename}`;
  
//       const result = await pool.query(
//         "INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
//         [name, description, price, image_url]
//       );
  
//       res.status(201).json({ message: "Product added successfully", product: result.rows[0] });
  
//     } catch (error) {
//       console.error("Error adding product:", error);
//       res.status(500).json({ error: "Database error" });
//     }
//   });
  

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // To check and create folder
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// PostgreSQL Connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "123456789",
  port: 5432,
});

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Create Products Table (Run Once)
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `);
    console.log("✅ Products table is ready.");
  } catch (error) {
    console.error("❌ Error creating table:", error);
  }
};
createTable();

// API Routes

// Get All Products
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ error: "Database error" });
  }
});

// Add Product with Image Upload
app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    console.log("File Received:", req.file);
    console.log("Body Received:", req.body);

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required!" });
    }

    const { name, description, price } = req.body;
    const image_url = `/uploads/${req.file.filename}`;

    const result = await pool.query(
      "INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, price, image_url]
    );

    res.status(201).json({ message: "✅ Product added successfully", product: result.rows[0] });

  } catch (error) {
    console.error("❌ Error adding product:", error);
    res.status(500).json({ error: "Database error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
