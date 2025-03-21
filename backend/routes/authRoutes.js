const express = require("express");
const { signup, login, getUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", authMiddleware, getUser); // Protected route to get user data

module.exports = router;
