import React, { useState, useEffect } from "react";
import l1 from "./images/l1.png";
import l2 from "./images/l2.png";
import l3 from "./images/l3.png";
import l4 from "./images/l4.png";
import { Link } from 'react-router-dom';
function Login() {
    const images = [l4, l3, l2, l1]; // Imported images
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '30px' }}>
            <div className="login-container" >
                <div className="grid-item image-container"  >

                    <img src={images[index]} alt="Slideshow" className="slideshow-image" />

                </div>
                <div className="grid-item">

                    <Link to="/Signup" style={{ fontSize: '14px' }}>Don't have an account? Signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
