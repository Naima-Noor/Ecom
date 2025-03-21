import React, { useState, useEffect } from "react";
import l1 from "./images/l1.png";
import l2 from "./images/l2.png";
import l3 from "./images/l3.png";
import l4 from "./images/l4.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const images = [l4, l3, l2, l1];
    const [index, setIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setMessage("❌ All fields are required!");
            setIsSuccess(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("❌ Passwords do not match!");
            setIsSuccess(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            setMessage("✅ Signup successful! Redirecting...");
            setIsSuccess(true);
            setFormData({ name: "", email: "", password: "", confirmPassword: "" });
            setTimeout(() => navigate("/login"), 3000);
        } catch (error) {
            setMessage(error.response?.data?.message || "❌ An error occurred!");
            setIsSuccess(false);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <div className="login-container">
                <div className="grid-item image-container">
                    <img src={images[index]} alt="Slideshow" className="slideshow-image" />
                </div>
                <div className="grid-item">
                    <h4 style={{ paddingTop: '20px', textWrap: "nowrap" }}>Crafty Fascinations</h4>
                    <p>Welcome back! Let's get you in.</p>
                    <form onSubmit={handleSubmit} style={{ width: '80%' }}>
                        <div>
                            <label className="text-gray-600 text-sm mb-1">Name</label>
                            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black" style={{ fontSize: "12px", backgroundColor: "#E3E6F3" }} />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-1">Email</label>
                            <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black" style={{ fontSize: "12px", backgroundColor: "#E3E6F3" }} />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-1">Password</label>
                            <input type="password" name="password" placeholder="********" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black" style={{ fontSize: "12px", backgroundColor: "#E3E6F3" }} />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-1">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="********" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black" style={{ fontSize: "12px", backgroundColor: "#E3E6F3" }} />
                        </div>
                        <button type="submit">Signup</button>
                        {message && (
                            <p
                                style={{
                                    padding: "10px",
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: isSuccess ? "#155724" : "#721c24",
                                    backgroundColor: isSuccess ? "#d4edda" : "#f8d7da",
                                    border: `1px solid ${isSuccess ? "#c3e6cb" : "#f5c6cb"}`,
                                    textAlign: "center",
                                    marginTop: "10px"
                                }}
                            >
                                {message}
                            </p>
                        )}

                    </form>
                    <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
