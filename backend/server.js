// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs"); // To check and create folder
// const { Pool } = require("pg");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/api/auth", authRoutes);
// const jwt = require("jsonwebtoken");
// const authRoutes = require("./routes/authRoutes");

// // PostgreSQL Connection
// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

// // Ensure 'uploads' folder exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer Configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir); // Ensure this folder exists
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//     },
// });

// const upload = multer({ storage });

// // Create Products Table (Run Once)
// const createTable = async () => {
//     try {
//         await pool.query(`
//       CREATE TABLE IF NOT EXISTS products (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         description TEXT,
//         price NUMERIC NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `);
//         console.log("✅ Products table is ready.");
//     } catch (error) {
//         console.error("❌ Error creating table:", error);
//     }
// };
// createTable();

// // API Routes

// // Get All Products
// app.get("/api/products", async (req, res) => {
//     try {
//         const result = await pool.query("SELECT * FROM products");
//         res.json(result.rows);
//     } catch (error) {
//         console.error("❌ Error fetching products:", error);
//         res.status(500).json({ error: "Database error" });
//     }
// });

// // Add Product with Image Upload
// app.post("/api/products", upload.single("image"), async (req, res) => {
//     try {
//         console.log("File Received:", req.file);
//         console.log("Body Received:", req.body);

//         if (!req.file) {
//             return res.status(400).json({ error: "Image file is required!" });
//         }

//         const { name, description, price } = req.body;
//         const image_url = `/uploads/${req.file.filename}`;

//         const result = await pool.query(
//             "INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
//             [name, description, price, image_url]
//         );

//         res.status(201).json({ message: "✅ Product added successfully", product: result.rows[0] });

//     } catch (error) {
//         console.error("❌ Error adding product:", error);
//         res.status(500).json({ error: "Database error" });
//     }
// });

// // Get Product by ID
// app.get("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;  // Extract product ID from the request URL
//         const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

//         if (result.rows.length === 0) {
//             return res.status(404).json({ error: "Product not found" });
//         }

//         res.json(result.rows[0]);  // Send the product details
//     } catch (error) {
//         console.error("❌ Error fetching product by ID:", error);
//         res.status(500).json({ error: "Database error" });
//     }
// });
// const authMiddleware = (req, res, next) => {
//     const token = req.header("Authorization");
//     if (!token) return res.status(401).json({ message: "Access Denied" });

//     try {
//         const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (error) {
//         res.status(400).json({ message: "Invalid Token" });
//     }
// };

// // Using Routes
// app.use("/api/auth", authRoutes);

// // Example of a protected route directly in server.js
// app.get("/api/protected", authMiddleware, (req, res) => {
//     res.json({ message: "This is a protected route", user: req.user });
// });


// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // To check and create folder
const { Pool } = require("pg");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5001;

// Import Routes
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes); // ✅ Use AFTER defining authRoutes

// PostgreSQL Connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
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

// Get Product by ID
app.get("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error("❌ Error fetching product by ID:", error);
        res.status(500).json({ error: "Database error" });
    }
});

// Auth Middleware
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

// Example of a protected route
app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
