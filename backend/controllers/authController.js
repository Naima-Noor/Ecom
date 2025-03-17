const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
require("dotenv").config();

// User Signup
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into database
        const newUser = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
            [name, email, hashedPassword]
        );

        res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// User Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user from database
        const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = userResult.rows[0];

        if (!user) return res.status(400).json({ message: "User not found" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get Current User (Protected Route)
exports.getUser = async (req, res) => {
    try {
        const user = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [req.user.id]);
        if (!user.rows.length) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
