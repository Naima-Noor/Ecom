import React, { useState, useEffect } from "react";
import l1 from "./images/l1.png";
import l2 from "./images/l2.png";
import l3 from "./images/l3.png";
import l4 from "./images/l4.png";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const images = [l4, l3, l2, l1]; // Imported images
    const [index, setIndex] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState(""); // For displaying success or error messages
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setMessage("❌ All fields are required!");
            setIsSuccess(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);

            // ✅ Save token to localStorage
            localStorage.setItem("token", response.data.token);

            setMessage("✅ Login successful! Redirecting...");
            setTimeout(() => navigate("/Profile"), 3000);
            setIsSuccess(true);
        } catch (error) {
            setMessage(error.response?.data?.message || "❌ An error occurred!");
            setIsSuccess(false);
        }
    }


    return (
        <div style={{ padding: '30px' }}>
            <div className="login-container" >
                <div className="grid-item image-container"  >

                    <img src={images[index]} alt="Slideshow" className="slideshow-image" />

                </div>
                <div className="grid-item">
                    <h4 >Crafty Fascinations</h4>
                    <p>Welcome to Crafty Fascinations</p>
                    {/* 
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 text-sm mb-1">Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black"
                                style={{ fontSize: '12px', backgroundColor: '#E3E6F3' }}
                            />
                        </div>

                        <div>
                            <label className="text-gray-600 text-sm mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black"

                                style={{
                                    fontSize: '12px', backgroundColor: '#E3E6F3'
                                }}
                            />
                        </div>
                    </div> */}

                    <form onSubmit={handleSubmit} style={{ width: '80%' }} bf>


                        <div>
                            <label className="text-gray-600 text-sm mb-1">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black"
                                style={{ fontSize: "12px", backgroundColor: "#E3E6F3" }}
                            />
                        </div>

                        <div>
                            <label className="text-gray-600 text-sm mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-black"
                                style={{ fontSize: "12px", backgroundColor: "#E3E6F3" }}
                            />
                        </div>


                        <button
                            type="submit"

                        >
                            Login
                        </button>
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



                    <p >
                        New to Crafty Fascinations?
                        <Link to="/Signup" className="text-blue-500 hover:underline"> Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
